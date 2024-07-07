import InventoryCharacter from '@/components/store/InventoryCharacter';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import InventoryCharUseModal from '@/modal/store/InventoryCharUseModal';

import useModal from '@/hooks/useModal';

import { useState, useEffect } from 'react';
import { instance } from '@/api/axios';

const InventoryCharacterPage = () => {
  const [selectedChar, setSelectedChar] = useState<{
    characterId: number;
    characterName: string;
    characterLevel: number;
    characterExp: number;
    characterDesc: string;
  } | null>(null);

  // type 'never' error 처리
  const [characters, setCharacters] = useState<
    Array<{ id: number; name: string; img: string; level: number; description: string; exp: number }>
  >([]);

  useEffect(() => {
    instance
      .get('/members/characters')
      .then((res) => {
        setCharacters(res.data.body.characters);
        console.log('응답 완료:', res.data.body.characters);
      })
      .catch((err) => {
        console.log('응답 실패:', err);
      });
  }, []);

  const { Modal, open, close } = useModal();

  const openModal = (
    characterId: number,
    characterName: string,
    characterLevel: number,
    characterExp: number,
    characterDesc: string,
  ) => {
    open();
    setSelectedChar({ characterId, characterName, characterLevel, characterExp, characterDesc });
  };

  // const confirm = () => {
  //   if (selectedChar !== null) {
  //     instance
  //       .patch(`/members/characters/${selectedChar.characterId}`)
  //       .then((res) => {
  //         console.log('응답 완료:', res.data);
  //       })
  //       .catch((err) => {
  //         console.log('응답 실패:', err);
  //       });
  //   }
  //   console.log('InvenCharModal confirmed');
  //   close();
  // };

  return (
    <div className="w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        보관함
      </div>
      <div className="flex flex-col px-[1.875rem] h-[calc(100vh-8.8125rem)]">
        <StoreMainProfile />
        <div className="flex-1 my-[2.3125rem] overflow-auto scroll">
          <Modal>
            {selectedChar && (
              <InventoryCharUseModal
                characterId={selectedChar.characterId}
                characterName={selectedChar.characterName}
                characterLevel={selectedChar.characterLevel}
                characterExp={selectedChar.characterExp}
                characterDesc={selectedChar.characterDesc}
                // onConfirm={confirm}
                onClose={close}
              />
            )}
          </Modal>
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
            {characters.map((character) => (
              <InventoryCharacter
                key={character.id}
                characterId={character.id}
                characterName={character.name}
                characterLevel={character.level}
                characterExp={character.exp}
                characterDesc={character.description}
                onClick={openModal}
                isSelected={false}
              />
            ))}
            <InventoryCharacter
              key={0}
              characterId={0}
              characterName={'알'}
              characterLevel={0}
              characterExp={0}
              characterDesc={'부화 시켜주세요'}
              onClick={openModal}
              isSelected={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCharacterPage;
