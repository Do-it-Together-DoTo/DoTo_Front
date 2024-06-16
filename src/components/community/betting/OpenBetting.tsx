import BettingItem from './BettingItem';
import { IBetting, OpenBettingList } from './BettingConstant';
import { useEffect, useState } from 'react';
const OpenBetting = () => {
  const [bettings, setBettings] = useState<IBetting[]>([]);

  useEffect(() => {
    setBettings(OpenBettingList);
  }, []);
  return (
    <section className="dt:w-[31rem] mb:w-full flex flex-col gap-3">
      <h3 className="text-Light_CategoryText_Icon_Contents text-2xl">오픈 베팅</h3>
      <div className="flex flex-col gap-[0.5rem]">
        {bettings.map((betting) => (
          <BettingItem key={betting.name} betting={betting} isParticipate={false} />
        ))}
      </div>
    </section>
  );
};

export default OpenBetting;
