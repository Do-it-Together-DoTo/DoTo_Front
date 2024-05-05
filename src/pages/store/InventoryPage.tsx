import { MyBlob, Coin, Slider } from '@/assets/svg';
import InventoryItem from './InventoryItem';

const InventoryPage = () => {
  return (
    <div className="absolute left-[10rem] top-[3.1875rem] flex justify-end dark:bg-Dark_Layout-100">
      <div className="w-[16.1875rem] h-screen bg-Dark_Text_Contents rounded-tl-3xl dark:bg-Dark_Layout-300"></div>
      <div className="w-screen h-screen bg-Light_Layout-200 dark:bg-Dark_Layout-200 ">
        <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
          보관함
        </div>
        <div className="px-[1.875rem]">
          <div className="rounded-[0.9375rem] flex items-center justify-center justify-center w-[49.8125rem] h-[9.375rem] bg-Light_Layout-100">
            <MyBlob className="w-[6.8137rem] h-[4.1563rem]" />
            <div>
              <div className="flex gap-x-[0.625rem] w-[27.1875rem]">
                <div className="text-Light_Text_Name text-[1.8125rem]">닉네임</div>
                <div className="content-end text-Light_Text_AboutMe font-nico">Lv.3</div>
              </div>
              <div className="flex items-center">
                <Slider className="w-[11.75rem] h-[0.75rem]" />
                <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe text-[0.75rem]">27%</div>
              </div>
            </div>
            <div className="flex items-center h-[1.875rem]">
              <Coin className="w-[1.875rem] h-[1.875rem]" />
              <div className="font-nico text-Light_Text_Name text-[1.75rem]">20</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-[49.1875rem] py-[2.3125rem]">
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
