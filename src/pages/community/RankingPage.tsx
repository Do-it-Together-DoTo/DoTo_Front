import { useEffect, useState } from 'react';
import { IUser, RANKERS } from '@/components/community/ranking/RankingConstant';
import Podium from '@/components/community/ranking/Podium';
import Rankers from '@/components/community/ranking/Rankers';
import MyRanking from '@/components/community/ranking/MyRanking';
import Timer from '@/components/community/ranking/Timer';

const RankingPage = () => {
  const [rankers, setRankers] = useState<IUser[]>([]);

  useEffect(() => {
    setRankers(RANKERS);
  }, []);

  return (
    <main className="h-[calc(100vh-3.1875rem)] flex w-full justify-center">
      <div className="w-[35rem] flex flex-col grow items-center bg-Light_Layout-200 dark:bg-Dark_Layout-300 ">
        <Timer />
        <Podium rankers={rankers} />
        <Rankers rankers={rankers} />
      </div>
      <div className="shrink-0 w-[20rem]">
        <MyRanking />
      </div>
    </main>
  );
};

export default RankingPage;
