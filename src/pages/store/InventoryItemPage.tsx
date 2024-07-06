import InventoryItem from '@/components/store/InventoryItem';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import useModal from '@/hooks/useModal';
import InventoryItemUseModal from '@/modal/store/InventoryItemUseModal';

import { useState, useEffect } from 'react';
import { instance } from '@/api/axios';

const InventoryItemPage = () => {
  const [selectedItem, setSelectedItem] = useState<{ itemName: string; isRare: boolean; itemValue: number } | null>(
    null,
  );

  const [items, setItems] = useState<Array<{ id: number; name: string; img: string; count: number; grade: string }>>(
    [],
  );

  useEffect(() => {
    instance
      .get('/members/items')
      .then((res) => {
        setItems(res.data.body.items);
        console.log('응답 완료:', res.data.body.items);
      })
      .catch((err) => {
        console.log('응답 실패:', err);
      });
  }, []);

  const { Modal, open, close } = useModal();

  const openModal = (itemName: string, isRare: boolean, itemValue: number) => {
    open();
    setSelectedItem({ itemName, isRare, itemValue });
  };

  // 아이템 사용
  const confirm = () => {
    console.log('InvenItemModal confirmed');
    instance
      .patch('/members/items', {
        characterId: 2,
        itemTypeId: 1,
        count: 3,
      })
      .then((res) => {
        // setItems(res.data.body);
        console.log('응답 완료:', res.data);
      })
      .catch((err) => {
        console.log('응답 실패:', err);
      });
    close();
  };

  return (
    <div className="w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        보관함
      </div>
      <div className="flex flex-col px-[1.875rem] h-[calc(100vh-8.8125rem)]">
        <StoreMainProfile />
        <div className="flex-1 my-[2.3125rem] overflow-auto scroll">
          <Modal>
            {selectedItem && (
              <InventoryItemUseModal
                itemName={selectedItem?.itemName}
                isRare={selectedItem?.isRare}
                itemValue={selectedItem?.itemValue}
                onConfirm={confirm}
                onClose={close}
              />
            )}
          </Modal>
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
            {items.map((item) => (
              <InventoryItem
                key={item.id}
                itemName={item.name}
                isRare={item.grade === 'RARE'}
                itemValue={item.count}
                onClick={openModal}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemPage;
