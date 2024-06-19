import { CharacterProfileIcon } from '@/assets/svg/community';
import { IMember } from './FriendConstant';
import { useState } from 'react';
import { STATUS } from './FriendConstant';
interface IFriendItemProps {
  member: IMember;
}

const FriendItem = ({ member }: IFriendItemProps) => {
  const [status, setStatus] = useState(member.status);

  const handleDeleteFriendBtn = () => {
    //TODO:친구삭제 모달 등장
  };

  const handleFriendBtn = () => {
    // TODO:친구신청 api요청
    setStatus(STATUS.WAIT);
    console.log(member.status);
  };

  const handleWaitBtn = () => {
    // TODO:친구신청 취소 api요청
    setStatus(STATUS.UNFOLLOW);
    console.log(member.status);
  };
  const handleBlockBtn = () => {
    //TODO:차단 모달 등장
  };
  return (
    <li className="flex dt:gap-[1rem] items-center mb:justify-between mb:w-full">
      <CharacterProfileIcon width="2.5rem" height="2.5rem" />
      <span className="text-Light_CategoryText_Icon_Contents text-base dark:text-Dark_CategoryText_Icon">
        {member.nickname}
      </span>
      {status === STATUS.FRIEND ? (
        <button
          onClick={handleDeleteFriendBtn}
          className="w-[4.375rem] h-[1.5625rem] bg-Light_CategoryText_Icon_Contents text-Light_Layout-400 text-[0.625rem] rounded-[0.6875rem] dark:text-Dark_CategoryText_Icon"
        >
          친구삭제
        </button>
      ) : status === STATUS.UNFOLLOW ? (
        <button
          onClick={handleFriendBtn}
          className="w-[4.375rem] h-[1.5625rem] bg-Button text-Light_Layout-400 text-[0.625rem] rounded-[0.6875rem] dark:text-Dark_CategoryText_Icon"
        >
          친구신청
        </button>
      ) : (
        status === STATUS.WAIT && (
          <button
            onClick={handleWaitBtn}
            className="w-[4.375rem] h-[1.5625rem] bg-Light_Layout-100 text-[0.625rem] rounded-[0.6875rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe"
          >
            대기중
          </button>
        )
      )}
      <button
        onClick={handleBlockBtn}
        className="w-[4.375rem] h-[1.5625rem] bg-Light_Layout-100 text-[0.625rem] rounded-[0.6875rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe"
      >
        차단
      </button>
    </li>
  );
};

export default FriendItem;
