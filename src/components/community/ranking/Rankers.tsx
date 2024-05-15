import { CharacterProfileIcon } from '@/assets/svg/community';
import React from 'react';
import { STAR_ICON_MAP } from './RankingConstant';
import { IUser } from './RankingConstant';

interface RankersProps {
  rankers: IUser[];
}
const Rankers = ({ rankers }: RankersProps) => {
  return (
    <section className="w-[28rem] h-[24.1875rem] rounded-[1.875rem] bg-Light_Layout-400 flex flex-col items-center px-9 py-[1.1875rem] overflow-y-auto scrollbar-hide dark:bg-Dark_Layout-400">
      <h3 className="text-lg text-Light_CategoryText_Icon_Contents">랭킹 순위</h3>
      <div className="w-full flex flex-col gap-4 ">
        {rankers.map((user, idx) => (
          <div
            key={user.point}
            className="w-full flex items-center justify-between py-2 border-b-[0.1rem] border-Light_Layout-200"
          >
            <div className="flex gap-2 items-center">
              <span className="text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">{idx + 1}</span>
              <CharacterProfileIcon width="40" height="40" />
              <span className="text-Light_Text_Name text-xs dark:text-Dark_CategoryText_Icon">{user.nickname}</span>
              {idx < 3 &&
                React.createElement(STAR_ICON_MAP[idx], {
                  width: '12',
                  height: '12',
                })}
            </div>
            <p className="bg-gradient-to-l bg-clip-text font-nico to-Ranking_Bar_End from-Ranking_Bar_Start text-transparent text-base">
              {'+' + user.point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rankers;
