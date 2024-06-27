import { UserImgSample, ModifyIcon } from '@assets/svg';
import { useState } from 'react';
import useModal from '@/hooks/useModal';
import ModifyMainCharacter from '@/modal/mypage/ModifyMainCharacter';
const UpdateProfilePage = () => {
  const [nickName, setNickName] = useState('센');
  const [comment, setComment] = useState('싸피11기');
  const { Modal, open, close } = useModal();

  return (
    <div className="flex flex-col items-center w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300">
      <h1 className="mt-[3.25rem] text-Light_Text_Name text-[1.625rem] font-semibold dark:text-Dark_Text_Name">
        프로필 수정
      </h1>
      <div className="mt-[5.5rem] relative  w-[47.0625rem] h-[31.75rem] bg-Light_Layout-300 flex flex-col items-center rounded-[1rem] dark:bg-Dark_Layout-200">
        <div className="mt-[1.8125rem] relative w-[11.0625rem] h-[11.0625rem] bg-Light_Layout-100 rounded-full dark:bg-Dark_Layout-100">
          <UserImgSample className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <ModifyIcon
            width={32}
            height={32}
            className="absolute top-3 right-3 fill-Light_Text_Name dark:fill-Dark_Text_Name"
            onClick={open}
          />
        </div>
        <div className="mt-[2rem] w-[38.75rem] flex justify-between items-center">
          <div className="text-[1.5625rem] text-Light_Text_Name dark:text-Dark_Text_Name">닉네임</div>
          <input
            className="pl-[2rem] focus:outline-none flex items-center w-[31.4375rem] h-[4rem] bg-Light_Layout-400 dark:bg-Dark_Layout-400 rounded-[1.5625rem] text-[1.5625rem] text-Light_Text_Name dark:text-Dark_Text_Name"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
          />
        </div>
        <div className="mt-[2rem] w-[38.75rem] flex justify-between items-center">
          <div className="text-[1.5625rem] text-Light_Text_Name dark:text-Dark_Text_Name">한줄 소개</div>
          <div className="pl-[2rem] pr-[1rem] flex items-center justify-between w-[31.4375rem] h-[4rem] bg-Light_Layout-400 dark:bg-Dark_Layout-400 rounded-[1.5625rem]">
            <input
              className="w-[23.75rem] text-[1.5625rem] focus:outline-none bg-Light_Layout-400 dark:bg-Dark_Layout-400 text-Light_Text_Name overflow-hidden line-clamp-1 dark:text-Dark_Text_Name"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="text-[1.5625rem] text-Light_Text_Name dark:text-Dark_Text_Name">9/20</div>
          </div>
        </div>
        <button className="mt-[2rem] mx-auto w-[11.0625rem] h-[3rem] bg-Button font-pre text-Light_Layout-100 text-[1.5625rem] rounded-[1.5625rem]">
          저장
        </button>
      </div>
      <Modal>
        <ModifyMainCharacter close={close} />
      </Modal>
    </div>
  );
};

export default UpdateProfilePage;
