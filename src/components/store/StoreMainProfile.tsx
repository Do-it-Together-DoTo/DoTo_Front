import { MyBlob, Slider, Coin } from '@/assets/svg';

const StoreMainProfile = () => {
  return (
    <div className="rounded-[0.9375rem] flex items-center justify-center px-8 space-x-60 w-full h-[9.375rem] bg-Light_Layout-100 dark:bg-Dark_Layout-200">
      <div className="flex">
        <MyBlob className="w-[6.8137rem] h-[4.1563rem] mr-4" />
        <div>
          <div className="flex gap-x-[0.625rem] w-[27.1875rem]">
            <div className="text-Light_Text_Name font-bold text-[1.8125rem]">닉네임</div>
            <div className="content-end text-Light_Text_AboutMe font-nico">Lv.3</div>
          </div>
          <div className="flex items-center">
            <Slider className="w-[11.75rem] h-[0.75rem]" />
            <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe text-[0.75rem]">27%</div>
          </div>
        </div>
      </div>
      <div className="flex items-center h-[1.875rem]">
        <Coin className="w-[1.875rem] h-[1.875rem]" />
        <div className="font-nico text-Light_Text_Name text-[1.75rem]">20</div>
      </div>
    </div>
  );
};

export default StoreMainProfile;
