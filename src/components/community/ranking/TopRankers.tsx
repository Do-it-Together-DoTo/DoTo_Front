import { CharacterProfileIcon, RankingBackground } from '@/assets/svg/community';
import React from 'react';
import { STAR_ICON_MAP, IUser } from './RankingConstant';

interface TopRankersProps {
  topRankers: IUser[];
}
const TopRankers = ({ topRankers }: TopRankersProps) => {
  return (
    <section className="flex gap-[2rem] items-end justify-center w-[25rem] h-[16.25rem] relative ">
      <RankingBackground className="absolute" width="405" height="245" />
      {topRankers.slice(0, 3).map((user, idx) => (
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
      ))}
    </section>
  );
};

export default TopRankers;
