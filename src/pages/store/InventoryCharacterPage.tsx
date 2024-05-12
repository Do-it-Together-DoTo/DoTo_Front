import InventoryItem from '../../components/store/InventoryItem';
import StoreMainProfile from '../../components/store/StoreMainProfile';

const InventoryCharacterPage = () => {
  return (
    <div className="h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 grow flex flex-col items-center">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        보관함
      </div>
      <div className="px-[1.875rem] w-full flex flex-col items-center">
        {/* <div> */}
        <StoreMainProfile />
        <div className="flex flex-wrap ml-4 gap-x-[1.75rem] gap-y-[1.25rem] w-full py-[2.3125rem]">
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
  );
};

export default InventoryCharacterPage;
