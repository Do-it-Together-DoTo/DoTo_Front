import { CharacterProfileIcon } from '@/assets/svg/community';
import { IChatting } from './ChattingConstant';
import { Link } from 'react-router-dom';

interface ChattingItemProps {
  chatting: IChatting;
}
const ChattingItem = ({ chatting }: ChattingItemProps) => {
  return (
    <Link to={`${chatting.roomId}`}>
      <div className="flex w-[44rem] h-24 gap-14 items-center rounded-xl border-[0.1rem]  pl-4 justify-start dark:border-Dark_CategoryText_Icon ">
        <CharacterProfileIcon width="60" height="60" />
        <p className="font-bold text-lg border-Dark_Text_Contents  text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
          {chatting.roomName}
        </p>
        <p className="text-xs border-Dark_Text_Contents  text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
          {chatting.host}
        </p>
      </div>
    </Link>
  );
};

export default ChattingItem;
