import { MyBlob, Slider } from '@/assets/svg';

const InventoryCharUseModal = () => {
  return (
    <div className="flex flex-col items-center p-10 justify-center w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      <div className="flex flex-col gap-y-4 justify-center items-center w-[9.8125rem]">
        <div className="flex flex-col items-center w-[8.6875rem]">
          <MyBlob className="w-20 h-12 m-6" />
          <div className="flex justify-center gap-x-1 w-[8.6875rem] h-4 mb-1.5">
            <div className="font-bold text-Light_Text_Name dark:text-Dark_Text_Name">캐릭터 이름</div>
            <div className="content-end text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe text-[0.5625rem] dark:text-Dark_Text_Contents font-nico">
              Lv.3
            </div>
          </div>
          <div className="flex h-6">
            <Slider className="w-[7.5rem]" />
            <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe dark:text-Dark_Text_Contents text-[0.3125rem]">
              27%
            </div>
          </div>

          <div className="text-[10px] w-52 text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
            캐릭터 설명 캐릭터 설명 캐릭터 설명 캐릭터 설명 캐릭터 설명 캐릭터 설명 캐릭터 설명 캐릭터 설명
          </div>
        </div>

        <button className="mt-3 w-[9.8125rem] h-[2.1875rem] bg-Button font-pre font-bold text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]">
          적용하기
        </button>
      </div>
    </div>
  );
};

export default InventoryCharUseModal;
