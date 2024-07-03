import ChattingItem from '@/components/community/chatting/ChattingItem';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
import { useEffect, useState } from 'react';
import { getJoinChatting } from '@/api/community/ChattingApi';
import { IChatRoom } from '@/api/community/Chatting.Interface';
const ChattingPage = () => {
  const [chattingRooms, setChattingRooms] = useState<IChatRoom[]>([]);

  const fetchJoinChatting = async () => {
    try {
      const response = await getJoinChatting();
      console.log(response.data.body);
      setChattingRooms(response.data.body.chatRooms);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJoinChatting();
  }, []);

  return (
    <CommunityPageLayout>
      {chattingRooms.map((chatting) => (
        <ChattingItem key={chatting.chatRoomId} chatting={chatting} />
      ))}
    </CommunityPageLayout>
  );
};

export default ChattingPage;
