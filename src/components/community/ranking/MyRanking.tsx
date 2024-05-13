const MyRanking = () => {
  return (
    <section className="w-[20rem] p-8 flex flex-col items-center bg-Light_Layout-100 dark:bg-Dark_Layout-200 ">
      <h3 className="text-lg text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">MY 랭킹 순위</h3>
      <div className="flex flex-col w-full ">
        <div className="h-[8.75rem] bg-gradient-to-t py-3 flex flex-col items-center to-Ranking_Bar_End from-Ranking_Bar_Start rounded-t-2xl relative">
          <div className="absolute top-5 w-40 h-40 rounded-full bg-Light_Layout-300 dark:bg-Dark_Layout-300"></div>
        </div>
        <div className="bg-Light_Layout-200 h-[30rem] z-10 dark:bg-Dark_Layout-400"></div>
      </div>
    </section>
  );
};

export default MyRanking;
