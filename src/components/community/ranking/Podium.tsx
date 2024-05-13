import { CharacterProfileIcon, CrownIcon, RankingBackground } from '@/assets/svg/community';
import React from 'react';
import { STAR_ICON_MAP, IUser } from './RankingConstant';

interface PodiumProps {
  rankers: IUser[];
}
const Podium = ({ rankers }: PodiumProps) => {
  return (
    <section className="flex gap-[2rem] items-end justify-center w-[25rem] h-[16.25rem] relative ">
      <RankingBackground className="absolute" width="405" height="245" />
      {rankers.slice(0, 3).map((user, rank) => (
        // idx를 이용해서 flex 아이템을 바꾸자
        <div
          key={user.nickname}
          className={'flex flex-col gap-3 items-center z-50' + (rank === 1 ? ' order-first' : '')}
        >
          <div className="flex flex-col w-12 items-center">
            {rank === 0 && <CrownIcon width="25" height="25" />}
            <p className="text-Light_Text_Name font-bold text-[0.625rem] dark:text-Dark_CategoryText_Icon">
              {user.nickname}
            </p>
            <p className="bg-gradient-to-l bg-clip-text font-nico to-Ranking_Bar_End from-Ranking_Bar_Start text-transparent text-base">
              {'+' + user.point}
            </p>
            <CharacterProfileIcon />
          </div>
          <div
            className={
              'w-24 h-20 bg-gradient-to-t py-3 flex flex-col items-center to-Ranking_Bar_End from-Ranking_Bar_Start rounded-t' +
              (rank === 0 ? ' h-[7.75rem]' : rank === 1 ? ' h-20' : ' h-[3.25rem]')
            }
          >
            {React.createElement(STAR_ICON_MAP[rank], { width: '25', height: '23' })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Podium;
