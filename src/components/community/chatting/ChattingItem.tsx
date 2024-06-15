import { CharacterProfileIcon } from '@/assets/svg/community';
import { IChatting } from './ChattingConstant';
import { Link } from 'react-router-dom';

interface ChattingItemProps {
  chatting: IChatting;
}
const ChattingItem = ({ chatting }: ChattingItemProps) => {
  return (
    <Link to={`${chatting.roomId}`}>
      <div className="group flex w-[44rem] h-24 gap-14 items-center rounded-xl border-[0.1rem]  pl-4 justify-start border-Dark_Text_Contents dark:border-Dark_CategoryText_Icon hover:bg-Dark_Text_Contents dark:hover:bg-Dark_CategoryText_Icon">
        <CharacterProfileIcon width="60" height="60" />
        <p className="font-bold text-lg border-Dark_Text_Contents  text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon group-hover:text-Light_Layout-400 dark:group-hover:text-Light_CategoryText_Icon_Contents">
          {chatting.roomName}
        </p>
        <p className="text-xs border-Dark_Text_Contents  text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon group-hover:text-Light_Layout-400  dark:group-hover:text-Light_CategoryText_Icon_Contents">
          {chatting.host}
        </p>
      </div>
    </Link>
  );
};

export default ChattingItem;
