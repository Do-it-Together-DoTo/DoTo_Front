import BettingItem from './BettingItem';
import { useEffect, useState } from 'react';
import { IBetting } from '@/api/community/Betting.Interface';
import { getOpenBetting } from '@/api/community/BettingApi';
const OpenBetting = () => {
  const [openBetting, setOpenBetting] = useState<IBetting[]>([]);

  async function fetchMyBetting() {
    try {
      const response = await getOpenBetting();
      setOpenBetting(response.data.body.openBetting);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMyBetting();
  }, []);

  return (
    <section className="dt:w-[31rem] mb:w-full flex flex-col gap-3">
      <h3 className="text-Light_CategoryText_Icon_Contents text-2xl">오픈 베팅</h3>
      <div className="flex flex-col gap-[0.5rem]">
        {openBetting.map((betting) => (
          <BettingItem key={betting.bettingId} betting={betting} isParticipate={false} type="open" />
        ))}
      </div>
    </section>
  );
};

export default OpenBetting;
