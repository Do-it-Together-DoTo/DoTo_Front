import { useEffect, useState } from 'react';
import Podium from '@/components/community/ranking/Podium';
import Rankers from '@/components/community/ranking/Rankers';
import Timer from '@/components/community/ranking/Timer';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
import { useDeviceSize } from '@/hooks/useDeviceSize';
import OrderToggle from '@/components/community/ranking/orderToggle/OrderToggle';
import useRankingApi from '@/hooks/community/useRankingApi';
import { IRanking } from '@/api/community/Ranking.interface';

const RankingPage = () => {
  const [rankers, setRankers] = useState<IRanking[]>([]);
  const { isDesktop, isMobile } = useDeviceSize();
  const { getRankingData } = useRankingApi();

  useEffect(() => {
    getRankingData({ order: 'GAIN' }).then((response) => {
      setRankers(response.ranks);
    });
  }, [getRankingData]);

  return (
    <CommunityPageLayout>
      <div className="flex flex-col dt:w-[35rem]  dt:grow dt:items-center bg-Light_Layout-200 dark:bg-Dark_Layout-300 mb:h-full mb:items-end">
        {isDesktop && <Timer />}
        {isMobile && <OrderToggle />}
        <Podium rankers={rankers} />
        <Rankers rankers={rankers} />
      </div>
    </CommunityPageLayout>
  );
};

export default RankingPage;
