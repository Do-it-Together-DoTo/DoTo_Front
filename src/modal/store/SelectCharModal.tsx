import { ModelCloseButton } from '@/assets/svg';
import InventoryCharacter from '@/components/store/InventoryCharacter';
import { useState } from 'react';

interface Character {
  charName: string;
  charLevel: number;
  charExp: number;
  charDesc: string;
}

const func = (characters: Character[], selectChar: (index: number) => void, selectedCharIndex: number | null) => {
  return characters.map((character, index) => {
    return (
      <InventoryCharacter
        key={index}
        characterName={character.charName}
        characterLevel={character.charLevel}
        characterExp={character.charExp}
        characterDesc={character.charDesc}
        onClick={() => {
          selectChar(index);
        }} // setSelected 작동
        isSelected={selectedCharIndex === index} // 인덱스가 같은지 판별 ===
      />
    );
  });
};

const SelectCharModal = () => {
  const [selectedCharIndex, setSelectedCharIndex] = useState<number | null>(null);

  const characters: Character[] = Array.from({ length: 10 }, () => ({
    charName: '짱구',
    charLevel: 7,
    charExp: 1234,
    charDesc: '설명입니다우아아아아아아아ㅏ아앙ㅇ',
  }));

  const selectChar = (index: number) => {
    if (index != null) {
      setSelectedCharIndex(index);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 relative gap-y-3 justify-center h-[508px] w-[753px] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      {/* <button onClick={props.onClose}> */}
      <button className="absolute top-5 right-5">
        <ModelCloseButton className="w-[15px] h-[15px]" />
      </button>

      <div className="font-[20px] text-center text-Light_Text_Name dark:text-Dark_Text_Name">
        아이템 적용할 캐릭터 선택
      </div>

      <div className="relative w-[653px] h-[329px] m-5 p-3 overflow-auto scroll bg-Light_Layout-300 rounded-[10px]">
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
          {func(characters, selectChar, selectedCharIndex)}
        </div>
      </div>

      <div className="flex gap-x-2.5">
        <button
          className="w-[6.75rem] h-[1.5625rem] bg-Button font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
          // onClick={props.onConfirm}
        >
          사용
        </button>
      </div>
    </div>
  );
};

export default SelectCharModal;
