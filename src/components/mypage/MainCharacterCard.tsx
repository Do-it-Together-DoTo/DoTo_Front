type MainCharacterCardProps = {
  characterImg: string;
  characterName: string;
  chracterLev: number;
  chracterExp: number;
  isFocused: boolean;
  onClick: () => void;
};

const MainCharacterCard = ({
  characterImg,
  characterName,
  chracterLev,
  chracterExp,
  isFocused,
  onClick,
}: MainCharacterCardProps) => {
  return (
    <div
      className={`flex flex-col items-center mb-[1rem] w-[8.4375rem] h-[10.625rem] rounded-[1rem] border ${
        isFocused ? 'border-Button border-4 my-[-0.1875rem]' : 'border-Dark_Text_Contents'
      }`}
      onClick={onClick}
    >
      <img src={characterImg} alt="User" width={101} height={61} className="mt-[1.1875rem]" />
      <p className="mt-[1rem] w-[8.4375rem] text-[1rem] text-Light_Text_Name font-bold">{characterName}</p>
      <p className="text-[0.8125rem] text-Light_Text_AboutMe font-nico">Lv. {chracterLev}</p>
      <div className="relative w-[6.25rem] h-[0.3125rem] bg-Dark_Layout-100 rounded-lg rounded-10">
        <div
          className={`absolute h-[0.3125rem] rounded-lg rounded-10 bg-gradient`}
          style={{ width: `${((chracterExp / 100) * 6.25).toFixed(3)}rem` }}
        />
      </div>
    </div>
  );
};

export default MainCharacterCard;
