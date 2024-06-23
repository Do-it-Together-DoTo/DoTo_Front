import ChattingMessage from '@/components/community/chatting/ChattingMessage';
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CHATTING_ROOM_LIST,
  CHATTING_MESSAGE_LIST,
  IChatting,
  IChattingMessage,
} from '@/components/community/chatting/ChattingConstant';
import { CharacterProfileIcon } from '@/assets/svg/community';
import { ArrowLeftIcon } from '@/assets/svg';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';

const ChattingRoomPage = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState<IChatting>();
  const [messages, setMessages] = useState<IChattingMessage[]>([]);
  useEffect(() => {
    setRoom(CHATTING_ROOM_LIST.find((room) => room.roomId === roomId));
    setMessages(CHATTING_MESSAGE_LIST);
  }, [roomId]);

  const formRef = useRef<HTMLFormElement>(null);
  const handleEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      // const text = (e.target as HTMLTextAreaElement).value;

      // TODO:초기화과정 다르게 해야함
      // 1. 전송하기 누르면 채팅 등록되었다는 요청
      (e.target as HTMLTextAreaElement).value = '';
      // 3. 다시 채팅 가져오기
    }
  };
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 소켓요청
  };

  return (
    <CommunityPageLayout>
      <section className="flex flex-col w-[33.75rem] py-8 px-9 bg-Light_Layout-400 gap-6 rounded-2xl dark:bg-Dark_Layout-400">
        <div className="flex items-center gap-3">
          <Link to="/community/chatting">
            <ArrowLeftIcon width={`1rem`} />
          </Link>

          <CharacterProfileIcon width="36" height="36" />
          <div className="text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon flex flex-col">
            <h3 className="text-lg  font-bold">{room?.roomName}</h3>
            <p className="text-xs">{room?.host}</p>
          </div>
        </div>

        <div className="flex flex-col w-[29rem] h-[30rem] mb:h-[47rem] px-5 py-6 bg-Light_Layout-100 rounded-2xl justify-between dark:bg-Dark_Layout-300">
          <div className="flex flex-col w-full gap-5 max-h-70 py-3 overflow-y-scroll">
            {messages.map((message) => (
              <ChattingMessage message={message} />
            ))}
          </div>
          {/* 채팅입력 구간 */}
          <form
            ref={formRef}
            onSubmit={handleFormSubmit}
            className="pl-2 py-3 bg-Light_Layout-400 rounded-[0.625rem] dark:bg-Dark_Layout-400"
          >
            <textarea
              rows={4}
              className="w-full bg-Light_Layout-400 resize-none outline-none dark:bg-Dark_Layout-400"
              onKeyDown={handleEnterPress}
            />
            <button type="submit">전송하기</button>
          </form>
        </div>
      </section>
    </CommunityPageLayout>
  );
};

export default ChattingRoomPage;
