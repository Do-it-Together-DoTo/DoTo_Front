import { UserImgSample } from '@assets/svg';

const BlockAccountPage = () => {
  return (
    <div className="flex flex-col items-center w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300">
      <h1 className="mt-[3.25rem] h-[2rem] text-Light_CategoryText_Icon_Contents font-semibold text-[1.625rem] dark:text-Dark_Text_Name">
        차단 목록
      </h1>
      <div className="mt-[3rem] flex flex-col items-center w-[25.6875rem] h-[28.125rem] bg-Light_Layout-300 rounded-[2rem]">
        <div className="mt-[2.5rem] w-[21.875rem] h-[3rem] flex justify-evenly items-center">
          <div className="  relative w-[2.5rem] h-[2.5rem] bg-Light_Layout-100 rounded-full dark:bg-Dark_Layout-100">
            <UserImgSample
              width={30}
              height={30}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex justify-center items-center text-[0.875rem]">닉네임 뭐하지</div>
          <button className="w-[5.75rem] h-[1.5625rem] bg-Light_Layout-100 font-pre text-Light_Text_AboutMe text-[0.8rem] rounded-[1.5625rem]">
            변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockAccountPage;
