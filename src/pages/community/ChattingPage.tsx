import ChattingItem from '@/components/community/chatting/ChattingItem';
import { CHATTING_ROOM_LIST } from '@/components/community/chatting/ChattingConstant';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
const ChattingPage = () => {
  return (
    <CommunityPageLayout>
      {CHATTING_ROOM_LIST.map((chatting) => (
        <ChattingItem key={chatting.roomId} chatting={chatting} />
      ))}
    </CommunityPageLayout>
  );
};

export default ChattingPage;
