import ShopItem from '@/components/store/ShopItem';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import useModal from '@/hooks/useModal';
import ShopItemBuyModal from '@/modal/store/ShopItemBuyModal';

import { useState } from 'react';

const ShopItemPage = () => {
  const [selectedItem, setSelectedItem] = useState<{ itemName: string; coinValue: number; isRare: boolean } | null>(
    null,
  );
  const { Modal, open, close } = useModal();

  const confirm = () => {
    console.log('ShopItemBuyModal confirmed');
    close();
    // 나머지 confirm 눌렀을 때 기능들 추가
  };

  const openModal = (itemName: string, coinValue: number, isRare: boolean) => {
    open();
    setSelectedItem({ itemName, coinValue, isRare });
  };

  return (
    <div className="h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        스토어
      </div>
      <div className="flex flex-col px-[1.875rem] h-[calc(100vh-8.8125rem)]">
        <StoreMainProfile />
        <div className="flex-1 my-[2.3125rem] overflow-auto scroll">
          <Modal>
            {selectedItem && (
              <ShopItemBuyModal
                itemName={selectedItem?.itemName}
                coinValue={selectedItem?.coinValue}
                isRare={selectedItem?.isRare}
                onConfirm={confirm}
                onClose={close}
              />
            )}
          </Modal>
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
            <ShopItem itemName={'AAA'} coinValue={100} isRare={true} onClick={openModal} />
            <ShopItem itemName={'BBB'} coinValue={200} isRare={true} onClick={openModal} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} onClick={openModal} />
            <ShopItem itemName={'item10'} coinValue={400} isRare={false} onClick={openModal} />
            <ShopItem itemName={'item1'} coinValue={500} isRare={true} onClick={openModal} />
            <ShopItem itemName={'item2'} coinValue={600} isRare={false} onClick={openModal} />
            <ShopItem itemName={'item3'} coinValue={700} isRare={false} onClick={openModal} />
            <ShopItem itemName={'item4'} coinValue={800} isRare={true} onClick={openModal} />
            <ShopItem itemName={'CCC'} coinValue={900} isRare={false} onClick={openModal} />
            <ShopItem itemName={'CCC'} coinValue={10} isRare={false} onClick={openModal} />
            <ShopItem itemName={'item24'} coinValue={20} isRare={false} onClick={openModal} />
            <ShopItem itemName={'item1524'} coinValue={30} isRare={false} onClick={openModal} />
            <ShopItem itemName={'item15234514'} coinValue={80} isRare={true} onClick={openModal} />
            <ShopItem itemName={'itemitem'} coinValue={3234520} isRare={true} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
            <ShopItem itemName={'helloitem'} coinValue={312371} isRare={false} onClick={openModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemPage;
