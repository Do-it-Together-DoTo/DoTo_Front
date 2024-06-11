import { useState } from 'react';
import moment from 'moment';
import 'moment/dist/locale/ko';
import { Droppable, Draggable, DragDropContext, DropResult } from 'react-beautiful-dnd';
import { fakerKO as faker } from '@faker-js/faker';
import CustomCalendar from '@/components/home/calendar/CustomCalendar';
import CategoryCard from '@/components/home/CategoryCard';
import useSelectedDateState from '@/store/selectedDateStore';
import { UserImgSample, CoinIcon } from '@assets/svg';
import { CategorySettingIcon } from '@assets/svg/home/category';

type SelectedUser = {
  id: string;
  username: string;
  introduction: string;
  level: number;
  coin: number;
  experience: number;
  isUserProfile: boolean;
};

const userProfile = {
  id: faker.string.uuid(),
  username: '센센센',
  introduction: 'ssafe 1기 이 칸의 줄 수는 2줄 입니다. 높이가 일정 높이를 넘으면 생략되어야 합니다.',
  level: 3,
  coin: 20,
  experience: 84,
  isUserProfile: true,
};

const initialFollowers = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  username: faker.person.lastName() + faker.person.firstName(),
  introduction: faker.lorem.sentence({ min: 3, max: 7 }),
  level: faker.number.int({ min: 1, max: 10 }),
  coin: faker.number.int({ min: 0, max: 9999 }),
  experience: faker.number.int({ min: 0, max: 100 }),
  isUserProfile: false,
}));

const todoList = Array.from({ length: 6 }, () => ({
  category: {
    id: faker.string.uuid(),
    shared: ['public', 'friendOnly', 'private'][Math.floor(Math.random() * 3)],
    title: faker.lorem.word(),
    color: ['skyblue', 'pink', 'blue', 'salmon', 'purple', 'yellow', 'green'][Math.floor(Math.random() * 7)],

    todo: Array.from({ length: 3 }, () => ({
      id: faker.string.uuid(),
      title: faker.lorem.sentence({ min: 3, max: 20 }),
      isDone: Math.random() < 0.5,
    })),
  },
}));

const HomePage = () => {
  const [followers, setFollowers] = useState(initialFollowers);
  const [selectedUser, setSelectedUser] = useState<SelectedUser>(userProfile);
  const [todos, setTodos] = useState(todoList);
  // const [isFollowed, setIsFollowed] = useState(false);

  const { selectedDate } = useSelectedDateState((state) => ({
    selectedDate: moment(state.selectedDate as Date).format('MMM Do(dd)'),
  }));

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    if (source.droppableId === 'followers') {
      const newFollowers = [...followers];

      const add = newFollowers[source.index];
      newFollowers.splice(source.index, 1);

      newFollowers.splice(destination.index, 0, add);

      setFollowers(newFollowers);
    } else {
      const sourceCategory = todos.find((todoItem) => todoItem.category.id === source.droppableId);
      const destinationCategory = todos.find((todoItem) => todoItem.category.id === destination.droppableId);

      const sourceTodos = sourceCategory ? [...sourceCategory.category.todo] : [];
      const destinationTodos = destinationCategory ? [...destinationCategory.category.todo] : [];

      const [removed] = sourceTodos.splice(source.index, 1);

      if (source.droppableId === destination.droppableId) {
        sourceTodos.splice(destination.index, 0, removed);
      } else {
        destinationTodos.splice(destination.index, 0, removed);
      }

      setTodos(
        todos.map((todoItem) => {
          if (todoItem.category.id === source.droppableId) {
            return { ...todoItem, category: { ...todoItem.category, todo: sourceTodos } };
          } else if (todoItem.category.id === destination.droppableId) {
            return { ...todoItem, category: { ...todoItem.category, todo: destinationTodos } };
          } else {
            return todoItem;
          }
        }),
      );
    }
  };

  const onClickSelected = (props: SelectedUser) => {
    if (Object.keys(selectedUser).length !== 0) {
      setSelectedUser({} as SelectedUser);
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
                  style={{ width: `calc(0.05rem*${userProfile.experience})` }}
                />
              </div>
              <span className="text-[0.55rem] font-nico text-Light_Text_AboutMe mr-2 absolute right-0 dark:text-Dark_Text_AboutMe">
                {userProfile.experience}%
              </span>
            </div>

            <div className="relative flex justify-center mt-2.5">
              <div className="flex flex-col items-center">
                <span className="w-20 text-xs text-center font-nico text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
                  LV.{userProfile.level}
                </span>
                <UserImgSample className="absolute bottom-0 w-20 " />
              </div>
              <div className="flex flex-col max-w-[6.5rem] pb-4 ml-3">
                <span className="overflow-hidden font-bold text-Light_Text_Name whitespace-nowrap text-ellipsis dark:text-Dark_Text_Name">
                  {userProfile.username}
                </span>
                <span className="overflow-hidden text-xs text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe line-clamp-2">
                  {userProfile.introduction}
                </span>
              </div>
            </div>
          </div>
          {/* 팔로워 */}
          <Droppable droppableId="followers" type="followers" direction="vertical">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-[16.1875rem] bg-Light_Layout-200 h-full overflow-y-auto scrollbar-hide dark:bg-Dark_Layout-400"
              >
                <div className="flex flex-col items-center pt-4">
                  {followers.map((follower, index) => (
                    <Draggable key={follower.id} draggableId={follower.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => onClickSelected(follower)}
                          className="flex items-center mb-5 px-5 w-[14.4375rem] h-12 rounded-md hover:bg-Light_Layout-100 active:bg-Light_Layout-100 dark:hover:bg-Dark_Layout-300 dark:active:bg-Dark_Layout-300"
                        >
                          <UserImgSample className="min-w-14 max-h-8" />
                          <div className="flex flex-col ml-3.5 max-w-32">
                            <div className="flex items-center">
                              <span className="overflow-hidden text-sm font-bold text-Light_Text_Name whitespace-nowrap text-ellipsis dark:text-Dark_Text_Name">
                                {follower.username}
                              </span>
                              <span className="font-nico text-Light_CategoryText_Icon_Contents text-[0.6rem] ml-1 dark:text-Dark_CategoryText_Icon">
                                LV.{follower.level}
                              </span>
                            </div>
                            <span className="mt-0.5 overflow-hidden text-xs line-clamp-1 text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
                              {follower.introduction}
                            </span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </section>

        {/* ToDo*/}
        <section className="flex h-[calc(100vh-3.1875rem)] w-full">
          {/* 캘린더 */}
          <div className="flex flex-col items-center w-3/5 h-full max-h-full overflow-y-auto scrollbar-hide bg-Light_Layout-300 dark:bg-Dark_Layout-300">
            <div className="flex flex-col px-5 my-8">
              {!selectedUser.isUserProfile ? (
                <p className="font-nico text-Light_CategoryText_Icon_Contents text-[0.625rem] h-1.5 w-40 text-right dark:text-Dark_CategoryText_Icon">
                  LV.{selectedUser.level}
                </p>
              ) : (
                <p className="h-1.5" />
              )}
              <div className="flex items-center w-[30rem]">
                <div className="flex w-[4.375rem] h-[4.375rem] rounded-full bg-Light_Layout-200 justify-center items-center dark:bg-Dark_Layout-200">
                  <UserImgSample className="w-14" />
                </div>
                <div className="flex flex-col justify-center ml-3">
                  {!selectedUser.isUserProfile && (
                    <div className="flex items-center h-3.5">
                      <div className="block w-20 h-1 rounded-full bg-Dark_Layout-100">
                        <div
                          className="block h-1 rounded-full bg-gradient"
                          style={{ width: `calc(0.05rem*${selectedUser.experience})` }}
                        />
                      </div>
                      <span className="text-[0.55rem] font-nico text-Light_Text_AboutMe ml-0.5 dark:text-Dark_Text_AboutMe">
                        {selectedUser.experience}%
                      </span>
                    </div>
                  )}
                  <span className="h-4 text-base font-bold text-Light_Text_Name mb-1.5 dark:text-Dark_Text_Name">
                    {selectedUser.username}
                  </span>
                  <span className="text-xs text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
                    {selectedUser.introduction}
                  </span>
                </div>
                {/* {!selectedUser.isUserProfile &&
                  (isFollowed ? (
                    <button
                      onClick={() => {
                        setIsFollowed(false);
                      }}
                      className="flex items-center justify-center h-6 w-[4.375rem] rounded-md bg-Light_CategoryText_Icon_Contents text-[0.625rem] text-Light_Layout-400 ml-auto"
                    >
                      친구삭제
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsFollowed(true);
                      }}
                      className="flex items-center justify-center h-6 w-[4.375rem] rounded-md bg-Button text-[0.625rem] text-Light_Layout-400 ml-auto"
                    >
                      친구신청
                    </button>
                  ))} */}
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
                {selectedDate}
              </p>
              <CategorySettingIcon width={`0.875rem`} className="dark:fill-Dark_Text_Contents" />
            </div>
            <div className="overflow-y-auto scrollbar-hide">
              {todos.map((todo) => (
                <CategoryCard key={todo.category.id} category={todo.category} todoList={todo.category.todo} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </DragDropContext>
  );
};

export default HomePage;
