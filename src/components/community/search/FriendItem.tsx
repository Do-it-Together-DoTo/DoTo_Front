const FriendItem = () => {
  return (
    <li className="flex gap-4">
      <div>사진</div>
      <span>닉네임</span>
      <button className="w-[4.375rem] h-[1.5625rem] bg-Button text-Light_Layout-400 text-[0.625rem] rounded-[0.6875rem]">
        친구신청
      </button>
      <button className="w-[4.375rem] h-[1.5625rem] bg-Light_Layout-100 text-[0.625rem] rounded-[0.6875rem] text-Light_Text_AboutMe">
        차단
      </button>
    </li>
  );
};

export default FriendItem;
