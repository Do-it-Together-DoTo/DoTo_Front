import { MyBlob, Slider } from '@/assets/svg';

const StoreDetailModal = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[18.75rem] w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      <div className="flex flex-col justify-center items-center w-[9.8125rem]">
        <div className="flex flex-col items-center w-[8.6875rem]  mb-[1.375rem]">
          <MyBlob className="w-20 h-12 m-2.5" />
          <div className="flex w-[8.6875rem] justify-start mb-1.5">
            <div className="font-bold text-Light_Text_Name dark:text-Dark_Text_Name">캐릭터 이름</div>
            <div className="content-end text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe text-[0.5625rem] dark:text-Dark_Text_Contents font-nico">
              Lv.3
            </div>
          </div>
          <div className="flex">
            <Slider className="w-[7.5rem]" />
            <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe dark:text-Dark_Text_Contents text-[0.3125rem]">
              27%
            </div>
          </div>
        </div>

        <div className="text-[10px] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
          캐릭터 설명~~ 캐릭터 설명~~ 캐릭터 설명~~ 캐릭터 설명~~ 캐릭터 설명~~
        </div>
        <button className="mt-[2.5rem] w-[9.8125rem] h-[2.1875rem] bg-Button font-pre font-bold text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]">
          적용하기
        </button>
      </div>
    </div>
  );
};

export default StoreDetailModal;
