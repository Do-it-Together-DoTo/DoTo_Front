import { useState } from 'react';
import { PublicIcon, FriendOnlyIcon, PrivateIcon, CheckIcon, ToggleIcon } from '@/assets/svg/home/category';
import { OpenTodoEditIcon } from '@/assets/svg/home/modal';
import { NavLink } from 'react-router-dom';

const CategorySettingPage = () => {
  const [isColorButton, setIsColorButton] = useState(false);
  const [isActivatedButton, setIsActivatedButton] = useState(false);
  const [isSharedButton, setIsSharedButton] = useState(false);

  const [isShared, setIsShared] = useState('public');
  const [isColor, setIsColor] = useState('pink');

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

  return (
    <div className="w-full px-20 pt-9 h-[calc(100vh-3.1875rem)] rounded-tl-3xl bg-Light_Layout-300 dark:bg-Dark_Layout-200">
      <div className="relative flex items-center justify-center">
        <NavLink to="/">
          <OpenTodoEditIcon className="absolute top-0 left-0 w-8 dark:fill-Dark_Text_Name" />
        </NavLink>
        <h1 className="text-2xl font-semibold text-Light_Text_Name dark:text-Dark_Text_Name">카테고리 관리</h1>
      </div>
      <div className="flex my-14">
        {/* 비활성 카테고리 */}
        <section className="w-full flex flex-col items-center h-[calc(100vh-14.3125rem)] bg-Light_Layout-400 rounded-2xl dark:bg-Dark_Layout-400">
          <h2 className="my-5 text-xl font-medium text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Name">
            비활성 카테고리
          </h2>
        </section>
        {/* 활성 카테고리 */}
        <section className="w-full flex flex-col items-center h-[calc(100vh-14.3125rem)] bg-Light_Layout-400 rounded-2xl mx-9 dark:bg-Dark_Layout-400">
          <h2 className="my-5 text-xl font-medium text-Light_CategoryText_Icon_Contents dark:text-Dark_Text_Name">
            카테고리
          </h2>
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
                  {isShared === 'public' ? (
                    <>
                      <PublicIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                      <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                        전체공개
                      </p>
                    </>
                  ) : isShared === 'friendOnly' ? (
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
                  <button onClick={handleOnClickShared('public')} className="flex items-center px-5 pt-4 pb-3">
                    <PublicIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                    <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                      전체공개
                    </p>
                  </button>
                  <button
                    onClick={handleOnClickShared('friendOnly')}
                    className="flex items-center px-5 py-3 border-y border-Light_Layout-200 dark:border-Dark_Layout-500"
                  >
                    <FriendOnlyIcon className="w-4 fill-Light_Text_AboutMe dark:fill-Dark_Text_Contents" />
                    <p className="ml-1 mr-1.5 font-medium text-sm text-Light_Text_AboutMe dark:text-Dark_Text_Contents">
                      친구공개
                    </p>
                  </button>
                  <button onClick={handleOnClickShared('private')} className="flex items-center px-5 pt-3 pb-4">
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
                      <div className={`w-5 h-5 mr-1.5 rounded-full bg-${isColor}`} />
                      <ToggleIcon className="w-2.5 rotate-180 transition-all dark:fill-Dark_Text_Contents" />
                    </>
                  ) : (
                    <>
                      <div className={`w-5 h-5 mr-1.5 rounded-full bg-${isColor}`} />
                      <ToggleIcon className="w-2.5 rotate-0 transition-all dark:fill-Dark_Text_Contents" />
                    </>
                  )}
                </button>
              </div>
              {isColorButton ? (
                <div className="flex mt-2 mb-1 ml-auto">
                  <button
                    onClick={handleOnClickColor('skyblue')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay6 bg-skyblue"
                  />
                  <button
                    onClick={handleOnClickColor('pink')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay5 bg-pink"
                  />
                  <button
                    onClick={handleOnClickColor('blue')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay4 bg-blue"
                  />
                  <button
                    onClick={handleOnClickColor('salmon')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay3 bg-salmon"
                  />
                  <button
                    onClick={handleOnClickColor('purple')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay2 bg-purple"
                  />
                  <button
                    onClick={handleOnClickColor('yellow')}
                    className="w-5 h-5 rounded-full opacity-0 animate-rightToLeftDelay1 bg-yellow"
                  />
                  <button onClick={handleOnClickColor('green')} className="w-5 h-5 mr-4 rounded-full bg-green" />
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
