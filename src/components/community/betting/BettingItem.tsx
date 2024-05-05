import { CharacterProfileIcon } from '@/assets/svg/community';
import { IBetting } from './BettingConstant';

interface BettingItemProps {
  betting: IBetting;
  isParticipate: boolean;
}
const BettingItem = ({ betting, isParticipate }: BettingItemProps) => {
  //   const [isParticipate, setIsParticipate] = useState(false);
  //완료베탕은 클릭하면 베팅 상세 모달 등장
  //오픈 베팅은 클릭하면 베팅 참여 모달 등장
  return (
    <div className="flex w-[31rem] h-10 py-3 gap-14 items-center rounded-xl border-[0.1rem] border-Dark_Text_Name text-xs text-Light_CategoryText_Icon_Contents pl-4 pr-16 justify-between dark:text-Dark_CategoryText_Icon dark:border-Dark_CategoryText_Icon">
      <CharacterProfileIcon width="24" height="24" />
      <p className="font-bold">{betting.host}</p>
      <p>{betting.name}</p>
      {isParticipate ? <p>자세히 보기</p> : <p>참여하기</p>}
    </div>
  );
};

export default BettingItem;
