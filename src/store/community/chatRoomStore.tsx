import { ChatRoom } from '@/types/community/Chatting.tsx';
import { create } from 'zustand';

type ChatRoomState = {
  chatRoom: ChatRoom;
  setChatRoom: (newChatRoom: ChatRoom) => void;
};

const useChatRoomStore = create<ChatRoomState>((set) => ({
  chatRoom: {
    chatRoomId: 0,
    bettingId: 0,
    bettingName: '',
    memberId: 0,
    memberNickname: '',
    mainCharacterImg: '',
  },
  setChatRoom: (newChatRoom: ChatRoom) => {
    set(() => ({
      chatRoom: newChatRoom,
    }));
  },
}));

export default useChatRoomStore;
