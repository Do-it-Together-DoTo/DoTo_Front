import { useEffect, useState } from 'react';
import {
  PublicIcon,
  FriendOnlyIcon,
  PrivateIcon,
  CheckIcon,
  ToggleIcon,
  DndIcon,
  EditCategoryIcon,
} from '@/assets/svg/home/category';
import { OpenTodoEditIcon } from '@/assets/svg/home/modal';
import { instance } from '@/api/axios';

interface categoryProps {
  id: number;
  contents: string;
  scope: string;
  isActivated: boolean;
  color: string;
  seq: number;
}

const CategorySettingPage = () => {
  const [activated, setActivated] = useState<categoryProps[]>([]);
  const [inActivated, setInActivated] = useState<categoryProps[]>([]);

  const [isColorButton, setIsColorButton] = useState(false);
  const [isActivatedButton, setIsActivatedButton] = useState(false);
  const [isSharedButton, setIsSharedButton] = useState(false);

  const [isShared, setIsShared] = useState('PUBLIC');
  const [isColor, setIsColor] = useState('PINK');

  useEffect(() => {
    instance
      .get('/categories')
      .then((res) => {
        setActivated(res.data.body['activated']);
        setInActivated(res.data.body['inactivated']);
      })
      .catch((err: string) => {
        console.log('카테고리 전체 응답 실패:', err);
      });
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleOnClickButton = (prop: string): React.MouseEventHandler<HTMLButtonElement> => {
    return () => {
      if (prop === 'shared') {
        setIsSharedButton(!isSharedButton);
      } else if (prop === 'color') {
        setIsColorButton(!isColorButton);
      } else if (prop === 'activated') {
        setIsActivatedButton(!isActivatedButton);
      }
    };
  };

  const handleOnClickShared = (shared: string): React.MouseEventHandler<HTMLButtonElement> => {
    return () => {
      setIsShared(shared);
      setIsSharedButton(!isSharedButton);
    };
  };

  const handleOnClickColor = (color: string): React.MouseEventHandler<HTMLButtonElement> => {
    return () => {
      setIsColor(color);
      setIsColorButton(!isColorButton);
    };
  };

  console.log(inActivated);
  console.log(activated);

  return (
    <div className="w-full px-20 pt-9 h-[calc(100vh-3.1875rem)] rounded-tl-3xl bg-Light_Layout-300 dark:bg-Dark_Layout-200">
      <div className="relative flex items-center justify-center">
        <button onClick={handleGoBack}>
          <OpenTodoEditIcon className="absolute top-0 left-0 w-12 px-2 py-2 dark:fill-Dark_Text_Name hover:bg-Light_Layout-200 hover:rounded-full dark:hover:bg-Dark_Layout-100" />
        </button>
        <h1 className="text-2xl font-semibold text-Light_Text_Name dark:text-Dark_Text_Name">카테고리 관리</h1>
      </div>
      <div className="flex my-14">
        {/* 비활성 카테고리 */}
        <section className="w-full flex flex-col items-center h-[calc(100vh-14.3125rem)] overflow-y-auto scrollbar-hide pb-5 bg-Light_Layout-400 rounded-2xl dark:bg-Dark_Layout-400">
          <h2 className="my-5 text-xl font-medium text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Name">
            비활성 카테고리
          </h2>
          <div className="w-full overflow-y-auto px-7 scrollbar-hide">
            {inActivated.map((inact) => (
              <div className="flex items-center justify-between mb-5">
                <div className="flex">
                  <DndIcon className="w-7 dark:fill-Light_Text_AboutMe" />
                  <div className="w-full h-full rounded-lg dark:bg-Dark_Layout-300">
                    <div
                      className={`flex border border-${inact.color.toLowerCase()} py-1 px-4 rounded-lg bg-${inact.color.toLowerCase()} bg-opacity-15`}
                    >
                      {inact.scope === 'PUBLIC' ? (
                        <PublicIcon className={`w-5 fill-${inact.color.toLowerCase()}`} />
                      ) : inact.scope === 'FRIENDS' ? (
                        <FriendOnlyIcon className={`w-5 fill-${inact.color.toLowerCase()}`} />
                      ) : inact.scope === 'PRIVATE' ? (
                        <PrivateIcon className={`w-5 fill-${inact.color.toLowerCase()}`} />
                      ) : null}
                      <span className={`text-lg text-${inact.color.toLowerCase()} font-medium ml-2.5`}>
                        {inact.contents}
                      </span>
                    </div>
                  </div>
                </div>
                <button>
                  <EditCategoryIcon className="px-1 py-1 rounded-full w-9 hover:bg-Light_Layout-200 hover:fill-Light_Text_Name dark:fill-Dark_Text_AboutMe dark:hover:bg-Dark_Layout-300 dark:hover:fill-Light_Layout-100" />
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* 활성 카테고리 */}
        <section className="w-full flex flex-col items-center h-[calc(100vh-14.3125rem)] bg-Light_Layout-400 rounded-2xl mx-9 pb-5 dark:bg-Dark_Layout-400">
          <h2 className="my-5 text-xl font-medium text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Name">
            카테고리
          </h2>
          <div className="w-full overflow-y-auto px-7 scrollbar-hide">
            {activated.map((act) => (
              <div className="flex items-center justify-between mb-5">
                <div className="flex">
                  <DndIcon className="w-7 dark:fill-Light_Text_AboutMe" />
                  <div className="w-full h-full rounded-lg dark:bg-Dark_Layout-300">
                    <div
                      className={`flex border border-${act.color.toLowerCase()} py-1 px-4 rounded-lg bg-${act.color.toLowerCase()} bg-opacity-15`}
                    >
                      {act.scope === 'PUBLIC' ? (
                        <PublicIcon className={`w-5 fill-${act.color.toLowerCase()}`} />
                      ) : act.scope === 'FRIENDS' ? (
                        <FriendOnlyIcon className={`w-5 fill-${act.color.toLowerCase()}`} />
                      ) : act.scope === 'PRIVATE' ? (
                        <PrivateIcon className={`w-5 fill-${act.color.toLowerCase()}`} />
                      ) : null}
                      <span className={`text-lg text-${act.color.toLowerCase()} font-medium ml-2.5`}>
                        {act.contents}
                      </span>
                    </div>
                  </div>
                </div>
                <button>
                  <EditCategoryIcon className="px-1 py-1 rounded-full w-9 hover:bg-Light_Layout-200 hover:fill-Light_Text_Name dark:fill-Dark_Text_AboutMe dark:hover:bg-Dark_Layout-300 dark:hover:fill-Light_Layout-100" />
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* 카테고리 생성 */}
        <section className="w-full flex flex-col items-center h-[calc(100vh-14.3125rem)]">
          <h2 className="my-5 text-xl font-medium text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Name">
            카테고리 생성
          </h2>

          <div className="flex flex-col items-center w-full h-full overflow-y-auto scrollbar-hide">
            <div className="w-full mb-12">
              <p className="text-sm text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">제목</p>
              <input
                type="text"
                className="w-full py-1 text-sm border-b outline-none border-Light_Layout-100 text-Light_Text_Name bg-Light_Layout-300 border-b-1 caret-Dark_Text_Contents placeholder:text-Dark_Text_Contents dark:bg-Dark_Layout-200 dark:border-Dark_Layout-400 dark:placeholder:text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Name dark:caret-Dark_Layout-400"
                placeholder="카테고리 제목을 입력하세요. (12자 이내만 표시됩니다.)"
              />
            </div>
            <div className="relative flex flex-col w-full pb-1 mb-12 border-b border-b-1 border-Light_Layout-100 dark:border-Dark_Layout-400">
              <div className="flex items-center justify-between">
                <p className="text-sm text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon ">
                  공개설정
                </p>
                <button onClick={handleOnClickButton('shared')} className="flex items-center justify-center">
                  {isShared === 'PUBLIC' ? (
                    <>
                      <PublicIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                      <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                        전체공개
                      </p>
                    </>
                  ) : isShared === 'FRIENDS' ? (
                    <>
                      <FriendOnlyIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                      <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                        친구공개
                      </p>
                    </>
                  ) : (
                    <>
                      <PrivateIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                      <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                        나만보기
                      </p>
                    </>
                  )}
                  {isSharedButton ? (
                    <>
                      <ToggleIcon className="w-2.5 rotate-180 transition-all dark:fill-Dark_Text_Contents" />
                    </>
                  ) : (
                    <>
                      <ToggleIcon className="w-2.5 rotate-0 transition-all dark:fill-Dark_Text_Contents" />
                    </>
                  )}
                </button>
              </div>
              {isSharedButton ? (
                <div className="absolute right-0 z-10 shadow-lg top-7 rounded-xl bg-Light_Layout-400 dark:bg-Dark_Layout-400">
                  <button onClick={handleOnClickShared('PUBLIC')} className="flex items-center px-5 pt-4 pb-3">
                    <PublicIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                    <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                      전체공개
                    </p>
                  </button>
                  <button
                    onClick={handleOnClickShared('FRIENDS')}
                    className="flex items-center px-5 py-3 border-y border-Light_Layout-200 dark:border-Dark_Layout-500"
                  >
                    <FriendOnlyIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                    <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                      친구공개
                    </p>
                  </button>
                  <button onClick={handleOnClickShared('PRIVATE')} className="flex items-center px-5 pt-3 pb-4">
                    <PrivateIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                    <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                      나만보기
                    </p>
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col w-full pb-1 mb-12 border-b border-b-1 border-Light_Layout-100 dark:border-Dark_Layout-400">
              <div className="flex items-center justify-between">
                <p className="text-sm text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">색상</p>
                <button onClick={handleOnClickButton('color')} className="flex items-center">
                  {isColorButton ? (
                    <>
                      <div className={`w-5 h-5 mr-1.5 rounded-full bg-${isColor.toLowerCase()}`} />
                      <ToggleIcon className="w-2.5 rotate-180 transition-all dark:fill-Dark_Text_Contents" />
                    </>
                  ) : (
                    <>
                      <div className={`w-5 h-5 mr-1.5 rounded-full bg-${isColor.toLowerCase()}`} />
                      <ToggleIcon className="w-2.5 rotate-0 transition-all dark:fill-Dark_Text_Contents" />
                    </>
                  )}
                </button>
              </div>
              {isColorButton ? (
                <div className="flex mt-2 mb-1 ml-auto">
                  <button
                    onClick={handleOnClickColor('SKYBLUE')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay6 bg-skyblue"
                  />
                  <button
                    onClick={handleOnClickColor('PINK')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay5 bg-pink"
                  />
                  <button
                    onClick={handleOnClickColor('BLUE')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay4 bg-blue"
                  />
                  <button
                    onClick={handleOnClickColor('SALMON')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay3 bg-salmon"
                  />
                  <button
                    onClick={handleOnClickColor('PURPLE')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay2 bg-purple"
                  />
                  <button
                    onClick={handleOnClickColor('YELLOW')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay1 bg-yellow"
                  />
                  <button onClick={handleOnClickColor('GREEN')} className="w-5 h-5 mr-4 rounded-full bg-green" />
                </div>
              ) : (
                <div className="transition-all" />
              )}
            </div>
            <div className="flex items-center justify-between w-full pb-1 mb-12 border-b border-b-1 border-Light_Layout-100 dark:border-Dark_Layout-400">
              <p className="text-sm text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">비활성화</p>
              {isActivatedButton ? (
                <button
                  onClick={handleOnClickButton('activated')}
                  className="w-4 h-4 flex items-center justify-center border-[0.0938rem] rounded-[0.1875rem] border-Button"
                >
                  <CheckIcon className="w-2.5 fill-Button" />
                </button>
              ) : (
                <button
                  onClick={handleOnClickButton('activated')}
                  className="w-4 h-4 border-[0.0938rem] rounded-[0.1875rem] border-Dark_Text_Contents dark:border-Light_CategoryText_Icon_Contents"
                />
              )}
            </div>
            <button className="font-medium min-h-9 w-36 rounded-3xl bg-Button text-Light_Layout-400">확인</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategorySettingPage;
