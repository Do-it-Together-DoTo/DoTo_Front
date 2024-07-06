import { CharacterProfileIcon } from '@/assets/svg/community';
import { IMember } from './FriendConstant';
import { useState } from 'react';
import { STATUS } from './FriendConstant';
import Button from './Button';
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
    <li className="flex dt:gap-[1rem] items-center mb:justify-between mb:w-full h-[2.5rem]">
      <CharacterProfileIcon width="2.5rem" height="2.5rem" />
      <span className="text-Light_CategoryText_Icon_Contents text-base dark:text-Dark_CategoryText_Icon">
        {member.nickname}
      </span>
      {status === STATUS.FRIEND ? (
        <Button color="dark" onClick={handleDeleteFriendBtn}>
          친구삭제
        </Button>
      ) : status === STATUS.UNFOLLOW ? (
        <Button color="blue" onClick={handleFriendBtn}>
          친구신청
        </Button>
      ) : (
        status === STATUS.WAIT && (
          <Button color="dark" onClick={handleWaitBtn}>
            대기중
          </Button>
        )
      )}
      <Button color="gray" onClick={handleBlockBtn}>
        차단
      </Button>
    </li>
  );
};

export default FriendItem;
