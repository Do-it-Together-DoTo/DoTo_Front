import { IBetting, MyBettingList } from './BettingConstant';
import MyBettingCategory from './MyBettingCategory';
import { useEffect, useState } from 'react';

interface IBettings {
  host: IBetting[];
  participate: IBetting[];
  complete: IBetting[];
}

const MyBetting = () => {
  // TODO: 연베팅, 참여한베팅, 완료한 베팅 나눠서 props로 전달
  const [host, setHost] = useState<IBetting[]>([]);
  const [participate, setParticipate] = useState<IBetting[]>([]);
  const [complete, setComplete] = useState<IBetting[]>([]);

  useEffect(() => {
    const bettings: IBettings = {
      host: [],
      participate: [],
      complete: [],
    };
    MyBettingList.forEach((betting) => betting.state && bettings[betting.state].push(betting));
    setHost(bettings.host);
    setParticipate(bettings.participate);
    setComplete(bettings.complete);
  }, []);

  return (
    <section className="dt:w-[31rem] mb:w-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-Light_CategoryText_Icon_Contents text-2xl">나의 베팅</h3>
        {!host.length && (
          <button className="border-Button border-[0.1rem] w-20 rounded-md px-2 py-1 text-xs text-Light_CategoryText_Icon_Contents">
            + 베팅 열기
          </button>
        )}
      </div>
      <div className="flex flex-col gap-[1rem] items-center">
        {host.length ? <MyBettingCategory category="연 베팅" bettings={host} /> : ''}
        {participate.length ? <MyBettingCategory category="참여한 베팅" bettings={participate} /> : ''}
        {complete.length ? <MyBettingCategory category="완료한 베팅" bettings={complete} /> : ''}
        {!MyBettingList.length && <p>참여한 베팅이 없어요</p>}
      </div>
    </section>
  );
};

export default MyBetting;
