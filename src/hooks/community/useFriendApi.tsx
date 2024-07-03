import { IFriendList, IFriendReq, IFriendSearchReq } from '@/api/community/Friend.Interface';
import {
  deleteBlockFriend,
  deleteFriend,
  deleteFriendRequest,
  getBlockFriends,
  getFriends,
  getSearchFriendResult,
  postBlockFriend,
  postFriend,
  postFriendRequset,
} from '@/api/community/FriendApi';

const useFriendApi = () => {
  // 유저차단
  const blockFriend = async (data: IFriendReq) => {
    try {
      await postBlockFriend(data);
    } catch (error) {
      console.log(error);
    }
  };

  // 친구 목록 조회
  const getMyBlockFriends = async (data: IFriendList) => {
    try {
      await getBlockFriends(data);
    } catch (error) {
      console.log(error);
    }
  };
  // 친구 목록 조회
  const getMyFriends = async (data: IFriendList) => {
    try {
      await getFriends(data);
    } catch (error) {
      console.log(error);
    }
  };

  //친구 신청
  const addFriend = async (data: IFriendReq) => {
    try {
      await postFriendRequset(data);
    } catch (error) {
      console.log(error);
    }
  };

  //친구신청 취소
  const cancelFriendRequest = async (data: IFriendReq) => {
    try {
      await deleteFriendRequest(data);
    } catch (error) {
      console.log(error);
    }
  };

  //유저차단 취소
  const unBlockFriend = async (data: IFriendReq) => {
    try {
      await deleteBlockFriend(data);
    } catch (error) {
      console.log(error);
    }
  };

  //친구 신청 거절
  const refuseFriendRequest = async (data: IFriendReq) => {
    try {
      await deleteBlockFriend(data);
    } catch (error) {
      console.log(error);
    }
  };

  //친구 신청 수락
  const acceptFriendRequest = async (data: IFriendReq) => {
    try {
      await postFriend(data);
    } catch (error) {
      console.log(error);
    }
  };

  //친구 삭제
  const removeFriend = async (memberId: number) => {
    try {
      await deleteFriend(memberId);
    } catch (error) {
      console.log(error);
    }
  };

  //친구 검색
  const searchFriend = async (data: IFriendSearchReq) => {
    let response;
    try {
      response = await getSearchFriendResult(data);
    } catch (error) {
      console.log(error);
    }

    return response;
  };
  return {
    blockFriend,
    removeFriend,
    acceptFriendRequest,
    searchFriend,
    addFriend,
    refuseFriendRequest,
    unBlockFriend,
    getMyBlockFriends,
    getMyFriends,
    cancelFriendRequest,
  };
};

export default useFriendApi;
