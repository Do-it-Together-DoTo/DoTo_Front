import { CharacterProfileIcon, RankingBackground } from '@/assets/svg/community';
import React, { useState } from 'react';
import { STAR_ICON_MAP } from './RankingConstant';
const RankingPage = () => {
  const [rankers, setRankers] = useState([
    { nickname: '센', point: 6300 },
    { nickname: '지현', point: 510 },
    { nickname: '현', point: 90 },
  ]);

  return (
    <>
      <div className="w-[70rem] h-screen bg-Dark_Text_Contents dark:bg-Dark_Layout-300 flex justify-center relative">
        <RankingBackground className="absolute" />
        <div className="flex gap-[2rem] items-end h-[16.25rem]">
          {rankers.splice(0, 3).map((user, idx) => (
            <>
              <div key={user.nickname} className="flex flex-col gap-3 items-center z-50">
                <div className="flex flex-col w-12 items-center">
                  <p className="text-Light_Text_Name font-bold text-[0.625rem]">{user.nickname}</p>
                  <p className="bg-gradient-to-l bg-clip-text  to-Ranking_Bar_End from-Ranking_Bar_Start text-transparent text-base">
                    {'+' + user.point}
                  </p>
                  <CharacterProfileIcon />
                </div>
                <div
                  className={
                    'w-24 h-20 bg-gradient-to-t py-3 flex flex-col items-center to-Ranking_Bar_End from-Ranking_Bar_Start rounded-t' +
                    (idx === 0 ? ' h-20' : idx === 1 ? ' h-[7.75rem]' : ' h-[3.25rem]')
                  }
                >
                  {React.createElement(STAR_ICON_MAP[idx], { width: '25', height: '23' })}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default RankingPage;
