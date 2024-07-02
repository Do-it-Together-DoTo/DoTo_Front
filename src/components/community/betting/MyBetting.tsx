import { getMyBetting } from '@/api/community/BettingApi';
import MyBettingCategory from './MyBettingCategory';
import { useEffect, useState } from 'react';

export interface IBetting {
  bettingId: number;
  bettingName: string;
  mainCharacterImg: String;
  memberId: number;
  memberNickname: string;
}

const MyBetting = () => {
  // TODO: 연베팅, 참여한베팅, 완료한 베팅 나눠서 props로 전달
  const [myBetting, setMyBetting] = useState<IBetting[]>([]);
  const [joiningBetting, setJoiningBetting] = useState<IBetting[]>([]);
  const [closedBetting, setClosedBetting] = useState<IBetting[]>([]);

  async function fetchMyBetting() {
    try {
      const response = await getMyBetting();
      setMyBetting(response.data.body.myBetting);
      setJoiningBetting(response.data.body.joiningBetting);
      setClosedBetting(response.data.body.closedBetting);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMyBetting();
  }, []);

  return (
    <section className="dt:w-[31rem] mb:w-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-Light_CategoryText_Icon_Contents text-2xl">나의 베팅</h3>
        {!myBetting.length && (
          <button className="border-Button border-[0.1rem] w-20 rounded-md px-2 py-1 text-xs text-Light_CategoryText_Icon_Contents">
            + 베팅 열기
          </button>
        )}
      </div>
      <div className="flex flex-col gap-[1rem] items-center">
        {myBetting.length ? <MyBettingCategory category="연 베팅" bettings={myBetting} /> : ''}
        {joiningBetting.length ? <MyBettingCategory category="참여한 베팅" bettings={joiningBetting} /> : ''}
        {closedBetting.length ? <MyBettingCategory category="완료한 베팅" bettings={closedBetting} /> : ''}
        {/* {!MyBettingList.length && <p>참여한 베팅이 없어요</p>} */}
      </div>
    </section>
  );
};

export default MyBetting;
