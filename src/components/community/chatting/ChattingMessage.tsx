import { CharacterProfileIcon } from '@/assets/svg/community';
import { IChattingMessage } from './ChattingConstant';

interface ChattingMessageProps {
  message: IChattingMessage;
}
const ChattingMessage = ({ message }: ChattingMessageProps) => {
  return (
    <div
      className={`flex gap-2 items-center self-start  ${message.memberId === 'me' && 'flex-row-reverse items-end self-end'}`}
    >
      <CharacterProfileIcon width="36" height="36" />
      <p className="min-h-8 py-[0.5rem] px-4 rounded-lg bg-Light_Layout-400 text-xs max-w-96 dark:bg-Dark_Layout-400 dark:text-Dark_CategoryText_Icon">
        안녕
      </p>
      <p className="text-Light_Text_Name text-xs ">12:58</p>
    </div>
  );
};

export default ChattingMessage;
