import { IFriendReq } from '@/api/community/Friend.Interface';
import { deleteBlockFriend, deleteFriendRequest, postBlockFriend, postFriend } from '@/api/community/FriendApi';

interface IFrendApiProps {
  data: IFriendReq;
}

const useFriendApi = ({ data }: IFrendApiProps) => {
  const blockFriend = async () => {
    try {
      await postBlockFriend(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addFriend = async () => {
    try {
      await postFriend(data);
    } catch (error) {
      console.log(error);
    }
  };
  const cancelFriendRequest = async () => {
    try {
      await deleteFriendRequest(data);
    } catch (error) {
      console.log(error);
    }
  };
  const unBlockFriend = async () => {
    try {
      await deleteBlockFriend(data);
    } catch (error) {
      console.log(error);
    }
  };
  const refuseFriendRequest = async () => {
    try {
      await deleteBlockFriend(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { blockFriend, addFriend, refuseFriendRequest, unBlockFriend, cancelFriendRequest };
};

export default useFriendApi;
