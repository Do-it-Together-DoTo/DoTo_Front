import { CharacterProfileIcon } from '@/assets/svg/community';
import { IBetting } from './MyBetting';

interface BettingItemProps {
  betting: IBetting;
  isParticipate: boolean;
}
const BettingItem = ({ betting, isParticipate }: BettingItemProps) => {
  //   const [isParticipate, setIsParticipate] = useState(false);
  //완료베탕은 클릭하면 베팅 상세 모달 등장
  //오픈 베팅은 클릭하면 베팅 참여 모달 등장
  return (
    <div className="flex items-center w-full h-[40px] dt:py-3 dt:gap-14 rounded-xl border-[0.1rem] border-Dark_Text_Contents text-xs text-Light_CategoryText_Icon_Contents pl-4 pr-16 justify-between dark:text-Dark_CategoryText_Icon dark:border-Dark_CategoryText_Icon">
      <CharacterProfileIcon width={'1.5rem'} height={'1.5rem'} />
      <p className="font-bold">{betting.memberNickname}</p>
      <p>{betting.bettingName}</p>
      {isParticipate ? <p>자세히 보기</p> : <p>참여하기</p>}
    </div>
  );
};

export default BettingItem;
