import { instance } from '../axios';
import { END_POINT } from './constants';
import { ChatAdd } from './Chatting.Interface';

//참여 중인 채팅방 조회
export const getJoinChatting = async () => {
  return await instance.get(END_POINT.MY_CHATTING);
};

//참여 중인 채팅방 조회
export const getChatting = async (chatRoomId: number) => {
  return await instance.get(END_POINT.CHATTING(chatRoomId));
};

//채팅방 참여
export const joinChatting = async (chatRoomId: number) => {
  return await instance.post(END_POINT.CHATTING(chatRoomId));
};

//채팅메세지 작성
export const sendChattingMessage = async (chatRoomId: number, data: ChatAdd) => {
  return await instance.post(END_POINT.CHATTING_MESSAGE(chatRoomId), data);
};
