import ShopCharacter from '@/components/store/ShopCharacter';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import ShopCharBuyModal from '@/modal/store/ShopCharBuyModal';

import { useState } from 'react';

const ShopCharacterPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedChar, setSelectedChar] = useState<{ characterName: string; coinValue: number } | null>(null);

  const openModal = (characterName: string, coinValue: number) => {
    setIsModalOpen(true);
    setSelectedChar({ characterName, coinValue });
  };

  return (
    <div className="h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        스토어
      </div>
      {/* 스크롤할 div height 정확하게 지정 */}
      <div className="flex flex-col px-[1.875rem] h-[calc(100vh-8.8125rem)]">
        <StoreMainProfile />
        <div className="flex-1 my-[2.3125rem] overflow-auto scroll">
          {isModalOpen && selectedChar && (
            <ShopCharBuyModal
              characterName={selectedChar.characterName}
              coinValue={selectedChar.coinValue}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
            <ShopCharacter characterName={'캐릭터1'} coinValue={100} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터2'} coinValue={200} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={300} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터4'} coinValue={400} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터5'} coinValue={500} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터6'} coinValue={600} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터7'} coinValue={700} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터8'} coinValue={800} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터9'} coinValue={900} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터10'} coinValue={1000} onClick={openModal} />
            <ShopCharacter characterName={'캐릭터11'} coinValue={1100} onClick={openModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCharacterPage;
