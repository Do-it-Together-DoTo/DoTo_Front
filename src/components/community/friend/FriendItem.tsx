import { CharacterProfileIcon } from '@/assets/svg/community';
import { IMember } from './FriendConstant';

interface IFriendItemProps {
  member: IMember;
  isFriend: boolean;
}

const FriendItem = ({ member, isFriend }: IFriendItemProps) => {
  return (
    <li className="flex gap-4 items-center">
      <CharacterProfileIcon width="40" height="40" />
      <span className="text-Light_CategoryText_Icon_Contents text-base dark:text-Dark_CategoryText_Icon">
        {member.nickname}
      </span>
      {isFriend ? (
        <>
          <button className="w-[4.375rem] h-[1.5625rem] bg-Light_CategoryText_Icon_Contents text-Light_Layout-400 text-[0.625rem] rounded-[0.6875rem] dark:text-Dark_CategoryText_Icon">
            친구삭제
          </button>
          <button className="w-[4.375rem] h-[1.5625rem] bg-Light_Layout-300 text-[0.625rem] rounded-[0.6875rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
            취소
          </button>
        </>
      ) : (
        <>
          <button className="w-[4.375rem] h-[1.5625rem] bg-Button text-Light_Layout-400 text-[0.625rem] rounded-[0.6875rem] dark:text-Dark_CategoryText_Icon">
            친구신청
          </button>
          <button className="w-[4.375rem] h-[1.5625rem] bg-Light_Layout-100 text-[0.625rem] rounded-[0.6875rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
            차단
          </button>
        </>
      )}
    </li>
  );
};

export default FriendItem;
