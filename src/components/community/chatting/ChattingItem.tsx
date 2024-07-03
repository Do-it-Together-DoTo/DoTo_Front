import { CharacterProfileIcon } from '@/assets/svg/community';
import { IChatRoom } from '@/api/community/Chatting.Interface';
import { Link } from 'react-router-dom';
import useChatRoomStore from '@/store/community/chatRoomStore';

interface ChattingItemProps {
  chatting: IChatRoom;
}
const ChattingItem = ({ chatting }: ChattingItemProps) => {
  const setChatRoom = useChatRoomStore((state) => state.setChatRoom);
  const handleItemClick = () => {
    setChatRoom(chatting);
  };
  return (
    <Link onClick={handleItemClick} to={`${chatting.chatRoomId}`} className="mb:w-full">
      <div className="group flex w-[44rem] mb:w-full h-24 gap-14 items-center rounded-xl border-[0.1rem]  pl-4 justify-start border-Dark_Text_Contents dark:border-Dark_CategoryText_Icon hover:bg-Dark_Text_Contents dark:hover:bg-Dark_CategoryText_Icon">
        <CharacterProfileIcon width="60" height="60" />
        <p className="font-bold text-lg border-Dark_Text_Contents  text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon group-hover:text-Light_Layout-400 dark:group-hover:text-Light_CategoryText_Icon_Contents">
          {chatting.bettingName}
        </p>
        <p className="text-xs border-Dark_Text_Contents  text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon group-hover:text-Light_Layout-400  dark:group-hover:text-Light_CategoryText_Icon_Contents">
          {chatting.memberNickname}
        </p>
      </div>
    </Link>
  );
};

export default ChattingItem;
