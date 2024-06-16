import InventoryCharacter from '@/components/store/InventoryCharacter';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import InventoryCharUseModal from '@/modal/store/InventoryCharUseModal';
import useModal from '@/hooks/useModal';

import { useState } from 'react';

const InventoryCharacterPage = () => {
  const [selectedChar, setSelectedChar] = useState<{
    characterName: string;
    characterLevel: number;
    characterExp: number;
    characterDesc: string;
  } | null>(null);

  const { Modal, open, close } = useModal();

  const openModal = (characterName: string, characterLevel: number, characterExp: number, characterDesc: string) => {
    open();
    setSelectedChar({ characterName, characterLevel, characterExp, characterDesc });
  };

  const confirm = () => {
    console.log('InvenCharModal confirmed');
    // confirm 클릭 시 기타 기능 추가
    close();
  };

  return (
    <div className="h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        보관함
      </div>
      <div className="flex flex-col px-[1.875rem] h-[calc(100vh-8.8125rem)]">
        <StoreMainProfile />
        <div className="flex-1 my-[2.3125rem] overflow-auto scroll">
          <Modal>
            {selectedChar && (
              <InventoryCharUseModal
                characterName={selectedChar.characterName}
                characterLevel={selectedChar.characterLevel}
                characterExp={selectedChar.characterExp}
                characterDesc={selectedChar.characterDesc}
                onConfirm={confirm}
                onClose={close}
              />
            )}
          </Modal>
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
            {/* <InventoryCharUseModal
              characterName={'이름테스트'}
              characterLevel={30}
              characterExp={41254}
              characterDesc={'설명입니다어쩌구저쩌꾸'}
              onConfirm={confirm}
              onClose={close}
            /> */}

            <InventoryCharacter
              characterName={'짱구'}
              characterLevel={7}
              characterExp={1234}
              characterDesc={'설명입니다우아아아아아아아ㅏ아앙ㅇ'}
              onClick={openModal}
            />
            <InventoryCharacter
              characterName={'유리'}
              characterLevel={7}
              characterExp={123451461}
              characterDesc={'설명입니다우아아아아아아아ㅏ아앙ㅇ'}
              onClick={openModal}
            />
            <InventoryCharacter
              characterName={'맹구'}
              characterLevel={7}
              characterExp={4321}
              characterDesc={'설명입니다우아아아아아아아ㅏ아앙ㅇ'}
              onClick={openModal}
            />
            <InventoryCharacter
              characterName={'짱아'}
              characterLevel={2}
              characterExp={1}
              characterDesc={'설명입니다우아아아아아아아ㅏ아앙ㅇ'}
              onClick={openModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCharacterPage;
