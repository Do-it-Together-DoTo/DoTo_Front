import { UserImgSample } from '@assets/svg';

import React from 'react';

const BlockProfile = () => {
  return (
    <div className="mt-[3rem] flex flex-col items-center w-[25.6875rem] h-[28.125rem] bg-Light_Layout-300 dark:bg-Dark_Layout-400 rounded-[2rem]">
      <div className="mt-[2.5rem] w-[21.875rem] h-[3rem] flex justify-evenly items-center">
        <div className="  relative w-[2.5rem] h-[2.5rem] bg-Light_Layout-100 rounded-full dark:bg-Dark_Layout-100">
          <UserImgSample
            width={30}
            height={30}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex justify-center items-center text-[0.875rem] text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
          닉네임 뭐하지
        </div>
        <button className="w-[5.75rem] h-[1.5625rem] bg-Light_Layout-100 font-pre text-Light_Text_AboutMe text-[0.8rem] rounded-[1.5625rem]">
          해제
        </button>
      </div>
    </div>
  );
};

export default BlockProfile;
