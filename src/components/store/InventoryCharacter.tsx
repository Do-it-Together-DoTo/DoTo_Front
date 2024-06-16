import { MyBlob, Slider } from '@/assets/svg';

interface InvenCharProps {
  characterName: string;
  characterLevel: number;
  characterExp: number;
  characterDesc: string;
  onClick: (characterName: string, characterLevel: number, characterExp: number, characterDesc: string) => void;
}

const InventoryCharacter = (props: InvenCharProps) => {
  const handleClick = () => {
    props.onClick(props.characterName, props.characterLevel, props.characterExp, props.characterDesc);
  };

  return (
    <div
      className="flex flex-col cursor-pointer justify-center items-center w-[8.4375rem] h-[10.625rem] border border-solid border-Dark_Text_Contents dark:border-Dark_Layout-400 rounded-[0.9375rem]"
      onClick={handleClick}
    >
      <MyBlob className="w-[6.3125rem] h-[3.8531rem] mb-[1.0625rem]">캐릭터 이미지</MyBlob>
      <div className="text-base font-bold text-Light_Text_Name dark:text-Dark_Text_Name">{props.characterName}</div>
      <div className="text-Light_Text_AboutMe dark:text-Dark_Text_Contents font-nico text-[0.8125rem]">
        Lv.{props.characterLevel}
      </div>
      <Slider className="w-[6.2075rem] mt-[0.6875rem]" />
    </div>
  );
};

export default InventoryCharacter;
