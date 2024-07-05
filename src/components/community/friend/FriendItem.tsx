import { CharacterProfileIcon } from '@/assets/svg/community';
import { STATUS } from './FriendConstant';
import Button from './Button';
import { IFriend } from '@/api/community/Friend.Interface';
import useFriendApi from '@/hooks/community/useFriendApi';
import useModal from '@/hooks/useModal';
import FriendModal from '@/modal/community/FriendModal';
import { useState } from 'react';
interface IFriendItemProps {
  friend: IFriend;
}

const FriendItem = ({ friend }: IFriendItemProps) => {
  const { removeFriend, addFriend, cancelFriendRequest, blockFriend } = useFriendApi();
  const { open, close, Modal } = useModal();
  const [modalType, setModalType] = useState<'delete' | 'block'>('delete');
  const handleModalClick = () => {
    return modalType === 'delete' ? removeFriend(friend.memberId) : blockFriend({ friendId: friend.memberId });
  };
  const handleBlockBtnClick = () => {
    setModalType('block');
    return open();
  };

  const handleDeleteBtnClick = () => {
    setModalType('delete');
    return open();
  };
  return (
    <li className="flex dt:gap-[1rem] items-center mb:justify-between mb:w-full h-[2.5rem]">
      <CharacterProfileIcon width="2.5rem" height="2.5rem" />
      <span className="text-Light_CategoryText_Icon_Contents text-base dark:text-Dark_CategoryText_Icon">
        {friend.nickname}
      </span>
      {friend.status === STATUS.FRIEND ? (
        <Button color="dark" onClick={handleDeleteBtnClick}>
          친구삭제
        </Button>
      ) : friend.status === STATUS.NOT_FRIEND ? (
        <Button
          color="blue"
          onClick={() => {
            addFriend({ friendId: friend.memberId });
          }}
        >
          친구신청
        </Button>
      ) : (
        <Button
          color="dark"
          onClick={() => {
            cancelFriendRequest({ friendId: friend.memberId });
          }}
        >
          대기중
        </Button>
      )}
      <Button color="gray" onClick={handleBlockBtnClick}>
        차단
      </Button>
      <Modal>
        <FriendModal type={modalType} onClose={close} onClick={handleModalClick} />
      </Modal>
    </li>
  );
};

export default FriendItem;
