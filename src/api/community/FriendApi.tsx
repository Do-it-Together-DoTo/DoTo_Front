import { instance } from '../axios';
import { END_POINT } from './constants';
import { IFriendList, IFriendReq, IFriendSearchReq } from './Friend.Interface';

//친구 목록 조회
export const getFriends = async (data: IFriendList) => {
  return await instance.get(END_POINT.MY_FRIEND, { params: data });
};

//친구 차단 목록 조회
export const getBlockFriends = async (data: IFriendList) => {
  return await instance.get(END_POINT.FRIEND_BLOCK, { params: data });
};

//유저 차단
export const postBlockFriend = async (data: IFriendReq) => {
  return await instance.post(END_POINT.FRIEND_BLOCK, data);
};

//유저 차단 취소
export const deleteBlockFriend = async (data: IFriendReq) => {
  return await instance.delete(END_POINT.FRIEND_BLOCK, { data: data });
};

//친구 신청
export const postFriendRequset = async (data: IFriendReq) => {
  return await instance.post(END_POINT.FRIEND_REQUEST, data);
};

//친구 신청 취소
export const deleteFriendRequest = async (data: IFriendReq) => {
  return await instance.delete(END_POINT.FRIEND_REQUEST, { data: data });
};

//친구 신청 수락
export const postFriend = async (data: IFriendReq) => {
  return await instance.post(END_POINT.FRIEND_RESPONSE, data);
};

//친구 신청 거절
export const deleteFriendResponse = async (data: IFriendReq) => {
  return await instance.delete(END_POINT.FRIEND_RESPONSE, { data: data });
};

//친구 삭제
export const deleteFriend = async (friendId: number) => {
  return await instance.delete(END_POINT.FRIEND(friendId));
};

//친구 검색
export const getSearchFriendResult = async (data: IFriendSearchReq) => {
  return await instance.get(END_POINT.FRIEND_SEARCH, { params: data });
};
