import { useState } from 'react';
import { RANKERS } from '@/dummy';
import TopRankers from '@/components/community/ranking/TopRankers';
import Rankers from '@/components/community/ranking/Rankers';
import MyRanking from '@/components/community/ranking/MyRanking';
import Timer from '@/components/community/ranking/Timer';
const RankingPage = () => {
  const [rankers, setRankers] = useState(RANKERS);

  return (
    <main className="h-[45rem] flex ">
      <div className="flex flex-col items-center w-[33.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-300">
        <Timer />
        <TopRankers topRankers={rankers.slice(0, 3)} />
        <Rankers rankers={rankers} />
      </div>
      <MyRanking />
    </main>
  );
};

export default RankingPage;
