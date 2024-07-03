import { CharacterProfileIcon } from '@/assets/svg/community';
import { STATUS } from './FriendConstant';
import Button from './Button';
import { IFriend } from '@/api/community/Friend.Interface';
import { cancelRequestFriend, removeFriend, requestFriend } from '@/api/community/FriendApi';
interface IFriendItemProps {
  friend: IFriend;
}

const FriendItem = ({ friend }: IFriendItemProps) => {
  const handleDeleteFriendBtn = async () => {
    try {
      await removeFriend(friend.memberId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFriendBtn = async () => {
    try {
      await requestFriend({ friendId: friend.memberId });
    } catch (error) {
      console.log(error);
    }
    console.log(friend.status);
  };

  const handleWaitBtn = async () => {
    try {
      await cancelRequestFriend({ friendId: friend.memberId });
    } catch (error) {
      console.log(error);
    }
    console.log(friend.status);
  };
  const handleBlockBtn = () => {
    //TODO:차단 모달 등장
  };
  return (
    <li className="flex dt:gap-[1rem] items-center mb:justify-between mb:w-full h-[2.5rem]">
      <CharacterProfileIcon width="2.5rem" height="2.5rem" />
      <span className="text-Light_CategoryText_Icon_Contents text-base dark:text-Dark_CategoryText_Icon">
        {friend.nickname}
      </span>
      {friend.status === STATUS.FRIEND ? (
        <Button color="dark" onClick={handleDeleteFriendBtn}>
          친구삭제
        </Button>
      ) : friend.status === STATUS.NOT_FRIEND ? (
        <Button color="blue" onClick={handleFriendBtn}>
          친구신청
        </Button>
      ) : (
        <Button color="dark" onClick={handleWaitBtn}>
          대기중
        </Button>
      )}
      <Button color="gray" onClick={handleBlockBtn}>
        차단
      </Button>
    </li>
  );
};

export default FriendItem;
