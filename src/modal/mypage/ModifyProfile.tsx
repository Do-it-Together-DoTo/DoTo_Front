import { UserImgSample, ModifyIcon } from '@assets/svg';

const ModifyProfile = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Dark_Layout-100 bg-opacity-60">
      <div className="relative  w-[47.0625rem] h-[31.75rem] bg-Light_Layout-200 flex flex-col items-center rounded-[1rem] dark:bg-Dark_Layout-200">
        <button className="absolute top-[1rem] right-[1rem] w-[2.5rem] h-[2.5rem] font-pre font-bold text-center text-[2rem] text-Light_Text_Name dark:text-Dark_Text_Name">
          X
        </button>
        <div className="mt-[1.8125rem] relative w-[11.0625rem] h-[11.0625rem] bg-Light_Layout-100 rounded-full dark:bg-Dark_Layout-100">
          <UserImgSample className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <ModifyIcon
            width={32}
            height={32}
            className="absolute top-3 right-3 fill-Light_Text_Name dark:fill-Dark_Text_Name"
          />
        </div>
        <div className="mt-[2rem] w-[38.75rem] flex justify-between items-center">
          <div className="text-[1.5625rem] text-Light_Text_Name dark:text-Dark_Text_Name">닉네임</div>
          <div className="pl-[2rem] flex items-center w-[31.4375rem] h-[4rem] bg-Light_Layout-400 dark:bg-Dark_Layout-400 rounded-[1.5625rem] text-[1.5625rem] text-Light_Text_Name dark:text-Dark_Text_Name">
            센
          </div>
        </div>
        <div className="mt-[2rem] w-[38.75rem] flex justify-between items-center">
          <div className="text-[1.5625rem] text-Light_Text_Name dark:text-Dark_Text_Name">한줄 소개</div>
          <div className="pl-[2rem] pr-[1rem] flex items-center justify-between w-[31.4375rem] h-[4rem] bg-Light_Layout-400 dark:bg-Dark_Layout-400 rounded-[1.5625rem]">
            <div className="w-[23.75rem] text-[1.5625rem] text-Light_Text_Name overflow-hidden line-clamp-1 dark:text-Dark_Text_Name">
              ssafy 11기
            </div>
            <div className="text-[1.5625rem] text-Light_Text_Name dark:text-Dark_Text_Name">9/20</div>
          </div>
        </div>
        <button className="mt-[2rem] mx-auto w-[11.0625rem] h-[3rem] bg-Button font-pre text-Light_Layout-100 text-[1.5625rem] rounded-[1.5625rem]">
          저장
        </button>
      </div>
    </div>
  );
};

export default ModifyProfile;
