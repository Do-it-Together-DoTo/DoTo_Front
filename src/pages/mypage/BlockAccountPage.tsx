import BlockProfile from '@/components/mypage/BlockProfile';
const BlockAccountPage = () => {
  return (
    <div className="flex flex-col items-center w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300">
      <h1 className="mt-[3.25rem] h-[2rem] text-Light_CategoryText_Icon_Contents font-semibold text-[1.625rem] dark:text-Dark_Text_Name">
        차단 목록
      </h1>
      <div className="py-[1rem] mt-[5.5rem] flex flex-col items-center w-[25.6875rem] h-[28.125rem] overflow-auto scroll scrollbar-hide bg-Light_Layout-300 dark:bg-Dark_Layout-400 rounded-[2rem]">
        <BlockProfile profileImg={'/svg/UserImgSample.svg'} profileId={'아이디뭐하지'} />
        <BlockProfile profileImg={'/svg/UserImgSample.svg'} profileId={'차단됐어요'} />
        <BlockProfile profileImg={'/svg/UserImgSample.svg'} profileId={'아이디뭐하지'} />
        <BlockProfile profileImg={'/svg/UserImgSample.svg'} profileId={'차단됐어요'} />
        <BlockProfile profileImg={'/svg/UserImgSample.svg'} profileId={'아이디뭐하지'} />
        <BlockProfile profileImg={'/svg/UserImgSample.svg'} profileId={'차단됐어요'} />
        <BlockProfile profileImg={'/svg/UserImgSample.svg'} profileId={'아이디뭐하지'} />
        <BlockProfile profileImg={'/svg/UserImgSample.svg'} profileId={'차단됐어요'} />
      </div>
    </div>
  );
};

export default BlockAccountPage;
