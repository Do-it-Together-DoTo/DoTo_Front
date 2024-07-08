import InventoryItem from '@/components/store/InventoryItem';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import useModal from '@/hooks/useModal';
import InventoryItemUseModal from '@/modal/store/InventoryItemUseModal';

import { useState, useEffect } from 'react';
import { instance } from '@/api/axios';

const InventoryItemPage = () => {
  const [selectedItem, setSelectedItem] = useState<{
    itemId: number;
    itemName: string;
    isRare: boolean;
    itemCount: number;
  } | null>(null);

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

  const openModal = (itemId: number, itemName: string, isRare: boolean, itemCount: number) => {
    open();
    setSelectedItem({ itemId, itemName, isRare, itemCount });
  };

  // 아이템 사용
  const confirm = () => {
    console.log('InvenItemModal confirmed');
    if (selectedItem !== null) {
      instance
        .patch('/members/items', {
          characterId: 2,
          itemTypeId: selectedItem.itemId,
          count: selectedItem.itemCount,
        })
        .then((res) => {
          console.log('응답 완료:', res.data);
        })
        .catch((err) => {
          console.log('응답 실패:', err);
        });
    }
    close();
  };

  // 아이템 판매
  const sellItem = () => {
    console.log('InvenItemModal confirmed');
    if (selectedItem !== null) {
      instance
        .patch(`/members/items/${selectedItem.itemId}`, {
          characterId: 2,
          itemTypeId: selectedItem.itemId,
          count: 3,
          // 모달에서 넘겨받은 값으로 설정
        })
        .then((res) => {
          // setItems(res.data.body);
          console.log('응답 완료:', res.data);
        })
        .catch((err) => {
          console.log('응답 실패:', err);
        });
    }
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
                itemCount={selectedItem?.itemCount}
                onConfirm={confirm}
                onSell={sellItem}
                onClose={close}
              />
            )}
          </Modal>
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
            {items.map((item) => (
              <InventoryItem
                key={item.id}
                itemId={item.id}
                itemName={item.name}
                isRare={item.grade === 'RARE'}
                itemCount={item.count}
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
