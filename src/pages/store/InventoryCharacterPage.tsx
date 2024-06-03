import InventoryCharacter from '@/components/store/InventoryCharacter';
import StoreMainProfile from '@/components/store/StoreMainProfile';

const InventoryCharacterPage = () => {
  return (
    <div className="h-[calc(100vh-3.1875rem)] overflow-auto scroll scrollbar-hide bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        보관함
      </div>
      <div className="px-[1.875rem]">
        <StoreMainProfile />
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full py-[2.3125rem]">
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
        </div>
      </div>
    </div>
  );
};

export default InventoryCharacterPage;
