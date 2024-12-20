import BettingItem from './BettingItem';
import { Betting } from './MyBetting';

type MyBettingCategoryProps = {
  category: '연 베팅' | '참여한 베팅' | '완료한 베팅';
  bettings: Betting[];
};

const MyBettingCategory = ({ category, bettings }: MyBettingCategoryProps) => {
  return (
    <div className="flex w-full flex-col gap-[0.5rem]">
      <p className="text-Light_CategoryText_Icon_Contents text-xs">{category}</p>
      {bettings.map((betting) => (
        <BettingItem key={betting.bettingId} betting={betting} isParticipate={true} type="my" />
      ))}
    </div>
  );
};

export default MyBettingCategory;
