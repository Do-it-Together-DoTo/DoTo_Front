import { useState } from 'react';
import MainCharacterCard from '@/components/mypage/MainCharacterCard';

interface ModifyMCProps {
  close: () => void;
}

const ModifyMainCharacter = ({ close }: ModifyMCProps) => {
  const [focusedCardIndex, setFocusedCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFocusedCardIndex(index === focusedCardIndex ? null : index);
  };

  return (
    <div className="relative mt-[5.5rem] relative w-[47.0625rem] h-[31.75rem] bg-Light_Layout-200 flex flex-col items-center rounded-[1rem] dark:bg-Dark_Layout-200">
      <p className="mt-[1.5rem] font-semibold text-[1.25rem] text-Light_Text_Name dark:text-Dark_Text_Name">
        대표캐릭터 변경
      </p>
      <button
        className="absolute top-[1.5rem] right-[1.5rem] w-[1.5rem] h-[1.5rem] text-[1.5rem] font-pre font-bold text-center text-Light_Text_Name"
        onClick={close}
      >
        X
      </button>
      <div className="p-[0.625rem] mt-[1.75rem] grid grid-cols-4 gap-4 w-[42.75rem] h-[21rem] bg-Light_Layout-300 dark:bg-Dark_Layout-300 rounded-[1rem] overflow-auto scroll scrollbar-hide">
        {[1, 2, 3, 4, 5].map((index) => (
          <MainCharacterCard
            key={index}
            characterImg={'/svg/UserImgSample.svg'}
            characterName={`캐릭터${index}`}
            chracterLev={3}
            chracterExp={50}
            isFocused={index === focusedCardIndex}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <button className="mt-[1.5rem] mx-auto w-[11.0625rem] h-[3rem] bg-Button font-pre text-Light_Layout-100 text-[1.5625rem] rounded-[1.5625rem]">
        변경
      </button>
    </div>
  );
};

export default ModifyMainCharacter;
