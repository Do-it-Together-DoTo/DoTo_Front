import ChattingMessage from '@/components/community/chatting/ChattingMessage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CHATTING_ROOM_LIST,
  CHATTING_MESSAGE_LIST,
  IChatting,
  IChattingMessage,
} from '@/components/community/chatting/ChattingConstant';
import { CharacterProfileIcon } from '@/assets/svg/community';

const ChattingRoomPage = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState<IChatting>();
  const [messages, setMessages] = useState<IChattingMessage[]>([]);
  // useEffect(() => {
  //   setRoom(CHATTING_ROOM_LIST.find((room) => room.roomId === roomId));
  //   setMessages(CHATTING_MESSAGE_LIST);
  // }, []);

  return (
    <main className="w-[54rem] h-[45rem] flex  flex-col gap-6 bg-Light_Layout-100 dark:bg-Dark_Layout-300 items-center py-14">
      <section className="flex flex-col w-[33.75rem] py-8 px-9 bg-Light_Layout-400 gap-6 rounded-2xl dark:bg-Dark_Layout-400">
        <div className="flex items-center gap-3">
          <CharacterProfileIcon width="36" height="36" />
          <div className="text-Light_CategoryText_Icon_Contents flex flex-col">
            <h3 className="text-lg  font-bold">{room?.roomName}</h3>
            <p className="text-xs">{room?.host}</p>
          </div>
        </div>

        <div className="flex flex-col w-[29rem] h-[30rem] px-5 py-6 bg-Light_Layout-100 rounded-2xl justify-between dark:bg-Dark_Layout-300">
          <div className="flex flex-col w-full gap-5 max-h-70 py-3 overflow-y-scroll">
            {messages.map((message) => (
              <ChattingMessage message={message} />
            ))}
          </div>
          <div className="pl-2 py-3 bg-Light_Layout-400 rounded-[0.625rem] dark:bg-Dark_Layout-400">
            <textarea
              rows={4}
              className="w-full bg-Light_Layout-400 resize-none outline-none dark:bg-Dark_Layout-400"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChattingRoomPage;
