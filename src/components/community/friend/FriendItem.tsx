import { CharacterProfileIcon } from '@/assets/svg/community';
import { STATUS } from './FriendConstant';
import Button from './Button';
import { Friend } from '@/types/community/Friend.tsx';
import useFriendApi from '@/hooks/community/useFriendApi';
import useModal from '@/hooks/useModal';
import FriendModal from '@/modal/community/FriendModal';
import { useState } from 'react';

type FriendItemProps = {
  friend: Friend;
};

const FriendItem = ({ friend }: FriendItemProps) => {
  const { removeFriend, addFriend, cancelFriendRequest, blockFriend } = useFriendApi();
  const { open, close, Modal } = useModal();
  const [modalType, setModalType] = useState<'delete' | 'block'>('delete');

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
        {modalType === 'delete' ? (
          <FriendModal
            nickname={friend.nickname}
            title="님을 삭제하시겠습니까?"
            btnText="삭제"
            onClose={close}
            onClick={() => removeFriend(friend.memberId)}
          />
        ) : (
          <FriendModal
            nickname={friend.nickname}
            title="님을 차단하시겠습니까?"
            messages={[
              '차단된 사람은 회원님의 프로필을 찾을 수 없습니다.',
              '마이페이지에서 언제든지 차단을 해제할 수 있습니다.',
            ]}
            btnText="차단"
            onClose={close}
            onClick={() => blockFriend({ friendId: friend.memberId })}
          />
        )}
      </Modal>
    </li>
  );
};

export default FriendItem;
