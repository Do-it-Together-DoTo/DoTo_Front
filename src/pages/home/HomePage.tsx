import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import 'moment/dist/locale/ko';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import CustomCalendar from '@/components/home/calendar/CustomCalendar';
import CategoryCard from '@/components/home/CategoryCard';
import useSelectedDateState from '@/store/selectedDateStore';
import { UserImgSample, CoinIcon } from '@assets/svg';
import { CategorySettingIcon } from '@assets/svg/home/category';
import { instance } from '@/api/axios';

interface ContentProps {
  coin: number;
  nickname: string;
  description: string;
  mainCharacterLevel: number;
  mainCharacterExp: number;
  memberId: number | null;
}

interface TodoDetailProps {
  contents: string;
  id: number;
  isDone: boolean;
}

interface TodoProps {
  categoryColor: string;
  categoryContents: string;
  categoryId: number;
  categoryIsActivated: boolean;
  categoryScope: string;
  todoDetailsResList: TodoDetailProps[];
}

interface BodyProps extends ContentProps {
  todoList: TodoProps[];
  relations: { content: ContentProps[] };
}

interface ApiProps {
  data: { body: BodyProps };
}

const HomePage = () => {
  const [userProfile, setUserProfile] = useState({
    nickname: '',
    description: '',
    mainCharacterLevel: 0,
    coin: 0,
    mainCharacterExp: 0,
    memberId: null,
  });
  const [followers, setFollowers] = useState<ContentProps[]>([]);
  const [selectedUser, setSelectedUser] = useState<ContentProps>(userProfile);
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const { selectedDateTitle, selectedDate } = useSelectedDateState((state) => ({
    selectedDateTitle: moment(state.selectedDate as Date).format('MMM Do(dd)'),
    selectedDate: moment(state.selectedDate as Date).format('yyyyMMDD'),
  }));

  useLayoutEffect(() => {
    instance
      .get('/members/')
      .then((res: ApiProps) => {
        setUserProfile({ ...res.data.body, memberId: null });
        console.log('유저정보 응답 완료:', res.data.body);
      })
      .catch((err: string) => {
        console.log('유저정보 응답 실패:', err);
      });

    instance
      .get('/members/friends')
      .then((res: ApiProps) => {
        setFollowers(res.data.body['relations']['content']);
        console.log('팔로워 응답 완료:', res.data.body['relations']['content']);
      })
      .catch((err: string) => {
        console.log('팔로워 응답 실패:', err);
      });
  }, []);

  useEffect(() => {
    setSelectedUser(userProfile);
  }, [userProfile]);

  useMemo(() => {
    if (selectedUser.memberId === null) {
      instance
        .get(`/todo?date=${selectedDate}`)
        .then((res: ApiProps) => {
          setTodos(res.data.body['todoList']);
          console.log('내 투두 응답 완료:', res.data.body['todoList']);
        })
        .catch((err: string) => {
          console.log('내 투두 응답 실패:', err);
        });
    } else {
      instance
        .get(`/todo/${selectedUser.memberId}?date=${selectedDate}`)
        .then((res: ApiProps) => {
          setTodos(res.data.body['todoList']);
          console.log('투두 응답 완료:', res.data.body['todoList']);
        })
        .catch((err: string) => {
          console.log('투두 응답 실패:', err);
        });
    }
  }, [selectedUser.memberId, selectedDate]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceCategory = todos.find((todoItem) => todoItem.categoryId.toString() === source.droppableId);
    const destinationCategory = todos.find((todoItem) => todoItem.categoryId.toString() === destination.droppableId);

    const sourceTodos = sourceCategory ? [...sourceCategory.todoDetailsResList] : [];
    const destinationTodos = destinationCategory ? [...destinationCategory.todoDetailsResList] : [];

    const [removed] = sourceTodos.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceTodos.splice(destination.index, 0, removed);
    } else {
      destinationTodos.splice(destination.index, 0, removed);
    }

    setTodos(
      todos.map((todoItem) => {
        if (todoItem.categoryId.toString() === source.droppableId) {
          return { ...todoItem, todoDetailsResList: sourceTodos };
        } else if (todoItem.categoryId.toString() === destination.droppableId) {
          return { ...todoItem, todoDetailsResList: destinationTodos };
        } else {
          return todoItem;
        }
      }),
    );
  };

  const onClickSelected = (props: ContentProps) => {
    if (Object.keys(selectedUser).length !== 0) {
      setSelectedUser({} as ContentProps);
    }
    setSelectedUser(props);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex w-full">
        {/* 프로필 & 팔로워 */}
        <section className="flex flex-col h-[calc(100vh-3.1875rem)]">
          {/* 내 프로필 */}
          <div
            onClick={() => onClickSelected(userProfile)}
            className="w-[16.1875rem] h-[10.5rem] bg-Light_Layout-100 rounded-tl-3xl dark:bg-Dark_Layout-200 flex flex-col justify-center relative"
          >
            <div className="flex items-center ml-auto mr-8 mb-0.5">
              <CoinIcon className="w-4 h-4" />
              <span className="font-nico text-sm text-Light_Text_Name ml-0.5 dark:text-Dark_Text_Name">
                {userProfile.coin}
              </span>
            </div>

            <div className="flex items-center ml-auto mr-8">
              <div className="block w-20 h-1 rounded-full bg-Dark_Layout-100">
                <div
                  className="block h-1 rounded-full bg-gradient"
                  style={{ width: `calc(0.05rem*${userProfile.mainCharacterExp})` }}
                />
              </div>
              <span className="text-[0.55rem] font-nico text-Light_Text_AboutMe mr-2 absolute right-0 dark:text-Dark_Text_AboutMe">
                {userProfile.mainCharacterExp}%
              </span>
            </div>

            <div className="relative flex justify-center mt-2.5">
              <div className="flex flex-col items-center">
                <span className="w-20 text-xs text-center font-nico text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
                  LV.{userProfile.mainCharacterLevel}
                </span>
                <UserImgSample className="w-20 mt-1" />
              </div>
              <div className="flex flex-col max-w-[6.5rem] pb-4 ml-3">
                <span className="overflow-hidden font-bold text-left text-Light_Text_Name whitespace-nowrap text-ellipsis dark:text-Dark_Text_Name">
                  {userProfile.nickname}
                </span>
                <span className="overflow-hidden w-[6.5rem] text-left text-xs text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe line-clamp-2">
                  {userProfile.description}
                </span>
              </div>
            </div>
          </div>
          {/* 팔로워 */}
          <div className="w-[16.1875rem] bg-Light_Layout-200 h-full overflow-y-auto scrollbar-hide dark:bg-Dark_Layout-400">
            <div className="flex flex-col items-center pt-4">
              {followers.map((follower) => (
                <button
                  key={follower.memberId}
                  onClick={() => onClickSelected(follower)}
                  className="flex items-center mb-5 px-5 w-[14.4375rem] h-12 rounded-md hover:bg-Light_Layout-100 active:bg-Light_Layout-100 dark:hover:bg-Dark_Layout-300 dark:active:bg-Dark_Layout-300"
                >
                  <UserImgSample className="min-w-14 max-h-8" />
                  <div className="flex flex-col ml-3.5 max-w-32">
                    <div className="flex items-center">
                      <span className="overflow-hidden text-sm font-bold text-left text-Light_Text_Name whitespace-nowrap text-ellipsis dark:text-Dark_Text_Name">
                        {follower.nickname}
                      </span>
                      <span className="font-nico text-Light_CategoryText_Icon_Contents text-[0.6rem] ml-1 dark:text-Dark_CategoryText_Icon">
                        LV.{follower.mainCharacterLevel}
                      </span>
                    </div>
                    <span className="mt-0.5 overflow-hidden text-xs text-left line-clamp-1 text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
                      {follower.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ToDo*/}
        <section className="flex h-[calc(100vh-3.1875rem)] w-full">
          {/* 캘린더 */}
          <div className="flex flex-col items-center w-3/5 h-full max-h-full overflow-y-auto scrollbar-hide bg-Light_Layout-300 dark:bg-Dark_Layout-300">
            <div className="flex flex-col px-5 my-8">
              {!(selectedUser.memberId === null) ? (
                <p className="font-nico text-Light_CategoryText_Icon_Contents text-[0.625rem] h-1.5 w-40 text-right dark:text-Dark_CategoryText_Icon">
                  LV.{selectedUser.mainCharacterLevel}
                </p>
              ) : (
                <p className="h-1.5" />
              )}
              <div className="flex items-center w-[30rem]">
                <div className="flex w-[4.375rem] h-[4.375rem] rounded-full bg-Light_Layout-200 justify-center items-center dark:bg-Dark_Layout-400">
                  <UserImgSample className="w-14" />
                </div>
                <div className="flex flex-col justify-center ml-3">
                  {!(selectedUser.memberId === null) && (
                    <div className="flex items-center h-3.5">
                      <div className="block w-20 h-1 rounded-full bg-Dark_Layout-100">
                        <div
                          className="block h-1 rounded-full bg-gradient"
                          style={{ width: `calc(0.05rem*${selectedUser.mainCharacterExp})` }}
                        />
                      </div>
                      <span className="text-[0.55rem] font-nico text-Light_Text_AboutMe ml-0.5 dark:text-Dark_Text_AboutMe">
                        {selectedUser.mainCharacterExp}%
                      </span>
                    </div>
                  )}
                  <span className="h-4 text-base text-left font-bold text-Light_Text_Name mb-1.5 dark:text-Dark_Text_Name">
                    {selectedUser.nickname}
                  </span>
                  <span className="text-xs text-left text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
                    {selectedUser.description}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <CustomCalendar />
            </div>
          </div>

          {/* 카테고리 */}
          <div className="flex flex-col w-2/5 h-full px-5 bg-Light_Layout-300 dark:bg-Dark_Layout-300">
            <div className="flex justify-between my-8">
              <p className="text-lg text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Contents">
                {selectedDateTitle}
              </p>
              {selectedUser.memberId === null ? (
                <NavLink to="/category">
                  <CategorySettingIcon width={`1.275rem`} className="dark:fill-Dark_Text_Contents" />
                </NavLink>
              ) : (
                <></>
              )}
            </div>
            <div className="overflow-y-auto scrollbar-hide">
              {todos.length > 0 &&
                todos.map((todo) => (
                  <CategoryCard
                    key={todo.categoryId}
                    memberId={selectedUser.memberId}
                    id={todo.categoryId}
                    color={todo.categoryColor}
                    scope={todo.categoryScope}
                    title={todo.categoryContents}
                    todoList={todo.todoDetailsResList}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    </DragDropContext>
  );
};

export default HomePage;
