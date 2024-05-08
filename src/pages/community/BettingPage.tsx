import MyBetting from '@/components/community/betting/MyBetting';
import OpenBetting from '@/components/community/betting/OpenBetting';
// import BettingModal from '@/modal/BettingModal';

const BettingPage = () => {
  return (
    <main className="w-[54rem] h-[45rem] flex flex-col gap-7 bg-Light_Layout-100 dark:bg-Dark_Layout-300 items-center py-14">
      {/* <BettingModal betting={MyBettingList[0]} /> */}
      <MyBetting />
      <OpenBetting />
    </main>
  );
};

export default BettingPage;
