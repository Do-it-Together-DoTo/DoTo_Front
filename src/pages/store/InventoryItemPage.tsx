import InventoryItem from '@/components/store/InventoryItem';
import StoreMainProfile from '@/components/store/StoreMainProfile';

const InventoryItemPage = () => {
  return (
    <div className="h-[calc(100vh-3.1875rem)] overflow-auto scroll scrollbar-hide bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        보관함
      </div>
      <div className="px-[1.875rem] w-full">
        <StoreMainProfile />
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full py-[2.3125rem]">
          <InventoryItem itemName={'특 성장 물약'} isRare={true} itemValue={8} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
          <InventoryItem itemName={'성장 물약'} isRare={false} itemValue={3} />
        </div>
      </div>
    </div>
  );
};

export default InventoryItemPage;
