import ChattingItem from '@/components/community/chatting/ChattingItem';
import { CHATTING_ROOM_LIST } from '@/components/community/chatting/ChattingConstant';

const ChattingPage = () => {
  return (
    <main className="w-full h-[calc(100vh-3.1875rem)] flex flex-col gap-6 bg-Light_Layout-200 dark:bg-Dark_Layout-300 items-center py-14 overflow-y-auto scrollbar-hide">
      {CHATTING_ROOM_LIST.map((chatting) => (
        <ChattingItem key={chatting.roomId} chatting={chatting} />
      ))}
    </main>
  );
};

export default ChattingPage;
