import ShopCharacter from '@/components/store/ShopCharacter';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import useModal from '@/hooks/useModal';
import ShopCharBuyModal from '@/modal/store/ShopCharBuyModal';
import ShopHatchModal from '@/modal/store/ShopHatchModal';
import NewCharModal from '@/modal/store/NewCharModal';
import SelectCharModal from '@/modal/store/SelectCharModal';

import { useState } from 'react';

const ShopCharacterPage = () => {
  const [selectedChar, setSelectedChar] = useState<{ characterName: string; coinValue: number } | null>(null);

  const { Modal, open, close } = useModal();

  const confirm = () => {
    console.log('ShopCharBuyModal confirmed');
    // confirm 클릭 시 기타 기능 추가
    close();
  };

  const openModal = (characterName: string, coinValue: number) => {
    open();
    setSelectedChar({ characterName, coinValue });
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
            {selectedChar && (
              <ShopCharBuyModal
                characterName={selectedChar.characterName}
                coinValue={selectedChar.coinValue}
                onConfirm={confirm}
                onClose={close}
              />
            )}
          </Modal>
          {/* Faker로 임의 데이터 불러오게 해보기?(Home Page User 나열된 것처럼) */}
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
            <ShopCharacter characterName={'캐릭터1'} coinValue={100} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터2'} coinValue={200} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={300} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터4'} coinValue={400} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터5'} coinValue={500} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터6'} coinValue={600} onClick={openModal} />
          </div>
          Modal test
          <div className="flex gap-x-5 gap-y-5">
            <SelectCharModal />
            <ShopHatchModal />
            <NewCharModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCharacterPage;
