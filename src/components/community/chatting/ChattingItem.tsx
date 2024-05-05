import { CharacterProfileIcon } from '@/assets/svg/community';
import { IChatting } from './ChattingConstant';
import { Link } from 'react-router-dom';

interface ChattingItemProps {
  chatting: IChatting;
}
const ChattingItem = ({ chatting }: ChattingItemProps) => {
  return (
    <Link to={`${chatting.roomId}`}>
      <div className="flex w-[44rem] h-24 gap-14 items-center rounded-xl border-[0.1rem] border-Dark_Text_Contents text-xs text-Light_CategoryText_Icon_Contents pl-4 justify-start dark:border-Dark_CategoryText_Icon dark:text-Dark_CategoryText_Icon">
        <CharacterProfileIcon width="60" height="60" />
        <p className="font-bold text-lg">{chatting.roomName}</p>
        <p className="text-xs">{chatting.host}</p>
      </div>
    </Link>
  );
};

export default ChattingItem;
