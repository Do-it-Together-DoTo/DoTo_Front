import { UserImgSample, CoinIcon } from '@assets/svg';

const HomePage = () => {
  return (
    <div className="relative flex">
      {/* 프로필 & 팔로워 */}
      <section className="absolute top-0 flex flex-col h-[calc(100vh-3.1875rem)]">
        {/* 내 프로필 */}
        <div className="w-[16.1875rem] h-[10.5rem] bg-Light_Layout-100 rounded-tl-3xl dark:bg-Dark_Layout-200 flex flex-col justify-center relative">
          <div className="flex items-center ml-auto mr-8 mb-0.5">
            <CoinIcon className="w-4 h-4" />
            <span className="font-nico text-sm text-Light_Text_Name ml-0.5 dark:text-Dark_Text_Name">9999</span>
          </div>

          <div className="flex items-center ml-auto mr-8">
            <div className="block w-20 h-1 rounded-full bg-Dark_Layout-100">
              <div className="block h-1 rounded-full w-[calc(0.05rem*70)] bg-gradient" />
            </div>
            <span className="text-[0.5rem] font-nico text-Light_Text_AboutMe mr-2 absolute right-0 dark:text-Dark_Text_AboutMe">
              70%
            </span>
          </div>

          <div className="relative flex justify-center mt-2.5">
            <div className="flex flex-col items-center">
              <span className="w-20 text-xs text-center font-nico text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
                LV.3
              </span>
              <UserImgSample className="absolute bottom-0 w-20 " />
            </div>
            <div className="flex flex-col max-w-[6.5rem] pb-4 ml-3">
              <span className="overflow-hidden font-bold text-Light_Text_Name text-ellipsis whitespace-nowrap dark:text-Dark_Text_Name">
                센센센센센센센센
              </span>
              <span className="overflow-hidden text-xs whitespace-pre-wrap text-Light_Text_AboutMe max-h-8 text-ellipsi dark:text-Dark_Text_AboutMe">
                ssafe 1기 이 칸의 줄 수는 2줄 입니다. 높이가 일정 높이를 넘으면 생략되어야 합니다.
              </span>
            </div>
          </div>
        </div>
        {/* 팔로워 */}
        <div className="w-[16.1875rem] bg-Light_Layout-200 h-full dark:bg-Dark_Layout-300"></div>
      </section>
    </div>
  );
};

export default HomePage;
