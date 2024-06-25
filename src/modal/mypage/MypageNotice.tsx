type NoticeType = {
  close: () => void;
  noticeTitle: string;
  noticeContent: string;
};

const MypageNotice = (props: NoticeType) => {
  return (
    <div className="w-[16.6875rem] h-[11.875rem] rounded-lg bg-Light_Layout-200 dark:bg-Dark_Layout-200 flex justify-center items-center">
      <p className="text-[1rem] text-Light_Text_Name dark:text-Dark_Text_Name">{props.noticeTitle}</p>
      <p className="text-[0.625rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">{props.noticeContent}</p>
      <button className="w-[6.6875rem] h-[1.875rem] bg-Button text-Light_Layout-400 text-[0.8rem] rounded-[1.5625rem]">
        확인
      </button>
    </div>
  );
};

export default MypageNotice;
