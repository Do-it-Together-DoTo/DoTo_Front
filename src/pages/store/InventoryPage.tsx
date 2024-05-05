import InventoryItem from './InventoryItem';
import StoreMainProfile from './StoreMainProfile';

const InventoryPage = () => {
  return (
    <div className="absolute left-[10rem] top-[3.1875rem] flex justify-end dark:bg-Dark_Layout-100">
      <div className="w-[16.1875rem] h-screen bg-Dark_Text_Contents rounded-tl-3xl dark:bg-Dark_Layout-300"></div>
      <div className="w-screen h-screen bg-Light_Layout-200 dark:bg-Dark_Layout-200 ">
        <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
          보관함
        </div>
        <div className="px-[1.875rem]">
          <StoreMainProfile />
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
