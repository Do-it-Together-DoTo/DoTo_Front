import { IChatRoom } from '@/api/community/Chatting.Interface';
import { create } from 'zustand';

interface ChatRoomState {
  chatRoom: IChatRoom;
  setChatRoom: (newChatRoom: IChatRoom) => void;
}

const useChatRoomStore = create<ChatRoomState>((set) => ({
  chatRoom: {
    chatRoomId: 0,
    bettingId: 0,
    bettingName: '',
    memberId: 0,
    memberNickname: '',
    mainCharacterImg: '',
  },
  setChatRoom: (newChatRoom: IChatRoom) => {
    set(() => ({
      chatRoom: newChatRoom,
    }));
  },
}));

export default useChatRoomStore;
