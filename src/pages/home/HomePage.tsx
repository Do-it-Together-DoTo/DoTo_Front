const HomePage = () => {
  return (
    <div className="relative flex">
      {/* 내 프로필 정보 */}
      <section className="absolute top-0 flex flex-col h-[calc(100vh-3.1875rem)]">
        <div className="w-[16.1875rem] h-[10.5rem] bg-Light_Layout-100 rounded-tl-2xl dark:bg-Dark_Layout-200"></div>
        <div className="w-[16.1875rem] bg-Light_Layout-200 h-full dark:bg-Dark_Layout-300"></div>
      </section>
    </div>
  );
};

export default HomePage;
