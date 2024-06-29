import ShopItem from '@/components/store/ShopItem';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import useModal from '@/hooks/useModal';
import ShopItemBuyModal from '@/modal/store/ShopItemBuyModal';

import { useState, useEffect } from 'react';
import { instance } from '@/api/axios';

const ShopItemPage = () => {
  const [selectedItem, setSelectedItem] = useState<{ itemName: string; coinValue: number; isRare: boolean } | null>(
    null,
  );

  const [items, setItems] = useState<Array<{ id: number; name: string; img: string; price: number; grade: string }>>(
    [],
  );

  useEffect(() => {
    instance
      .get('/store/items')
      .then((res) => {
        setItems(res.data.body.items);
        console.log('응답 완료:', res.data.body.items);
      })
      .catch((err) => {
        console.log('응답 실패:', err);
      });
  }, []);

  const { Modal, open, close } = useModal();

  const confirm = () => {
    console.log('ShopItemBuyModal confirmed');
    // confirm 클릭 시 기타 기능 추가
    close();
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
            {items.map((item) => (
              <ShopItem
                key={item.id}
                itemName={item.name}
                coinValue={item.price}
                isRare={item.grade === '테스트 아이템 등급1'}
                onClick={openModal}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemPage;
