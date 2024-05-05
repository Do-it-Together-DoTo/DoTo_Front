import MyBetting from '@/components/community/betting/MyBetting';
import OpenBetting from '@/components/community/betting/OpenBetting';

const BettingPage = () => {
  return (
    <main className="w-[54rem] h-[45rem] flex flex-col gap-7 bg-Dark_Text_Contents dark:bg-Dark_Layout-300 items-center py-14">
      <MyBetting />
      <OpenBetting />
    </main>
  );
};

export default BettingPage;
