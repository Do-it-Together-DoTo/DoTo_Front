import ShopCharacter from '@/components/store/ShopCharacter';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import useModal from '@/hooks/useModal';
import ShopCharBuyModal from '@/modal/store/ShopCharBuyModal';

import { useState, useEffect } from 'react';
import { instance } from '@/api/axios';

const ShopCharacterPage = () => {
  const [selectedChar, setSelectedChar] = useState<{ characterName: string; coinValue: number } | null>(null);

  // const [eggs, setEggs] = useState<object<{ id: number; name: string; img: string; price: number }>>();
  const [eggs, setEggs] = useState<{ id: number; name: string; img: string; price: number } | null>(null);

  useEffect(() => {
    instance
      .get('/store/characters')
      .then((res) => {
        setEggs(res.data.body);
        // 현재 Egg 하나여서({} 형태) 일단 body만 추출
        console.log('응답 완료:', res.data.body);
      })
      .catch((err) => {
        console.log('응답 실패:', err);
      });
  }, []);

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

  // eggs가 null이면 렌더링 에러
  if (eggs) {
    return (
      <div className="w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
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
            <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
              <ShopCharacter key={eggs.id} characterName={eggs.name} coinValue={eggs.price} onClick={openModal} />
              {/* <ShopCharacter characterName={'캐릭터4'} coinValue={400} onClick={openModal} />
              <ShopCharacter characterName={'캐릭터5'} coinValue={500} onClick={openModal} />
              <ShopCharacter characterName={'캐릭터6'} coinValue={600} onClick={openModal} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ShopCharacterPage;
