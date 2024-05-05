import BettingItem from './BettingItem';
import { IBetting } from './BettingConstant';

interface MyBettingCategoryProps {
  category: '연 베팅' | '참여한 베팅' | '완료한 베팅';
  bettings: IBetting[];
}

const MyBettingCategory = ({ category, bettings }: MyBettingCategoryProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-Light_CategoryText_Icon_Contents text-xs">{category}</p>
      {bettings.map((betting) => (
        <BettingItem key={betting.name} betting={betting} isParticipate={true} />
      ))}
    </div>
  );
};

export default MyBettingCategory;
