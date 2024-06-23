import { useEffect, useState } from 'react';
import { IUser, RANKERS } from '@/components/community/ranking/RankingConstant';
import Podium from '@/components/community/ranking/Podium';
import Rankers from '@/components/community/ranking/Rankers';
import MyRanking from '@/components/community/ranking/MyRanking';
import Timer from '@/components/community/ranking/Timer';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
import { useDeviceSize } from '@/hooks/useDeviceSize';
import OrderToggle from '@/components/community/ranking/orderToggle/OrderToggle';

const RankingPage = () => {
  const [rankers, setRankers] = useState<IUser[]>([]);
  const { isDesktop, isMobile } = useDeviceSize();
  useEffect(() => {
    setRankers(RANKERS);
  }, []);

  return (
    <CommunityPageLayout>
      {isDesktop && (
        <>
          <div className="w-[35rem] flex flex-col grow items-center bg-Light_Layout-200 dark:bg-Dark_Layout-300 ">
            <Timer />
            <Podium rankers={rankers} />
            <Rankers rankers={rankers} />
          </div>
          <div className="shrink-0 w-[20rem]">
            <MyRanking />
          </div>
        </>
      )}
      {isMobile && (
        <div className="h-full flex flex-col items-end">
          <OrderToggle />
          <Podium rankers={rankers} />
          <Rankers rankers={rankers} />
        </div>
      )}
    </CommunityPageLayout>
  );
};

export default RankingPage;
