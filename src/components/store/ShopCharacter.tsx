import { Coin, Egg } from '@/assets/svg';

type propstype = {
  characterName: string;
  coinValue: number;
};

const ShopCharacter = (props: propstype) => {
  return (
    <div className="flex flex-col justify-center items-center w-[8.4375rem] h-[10.625rem] border border-solid border-Dark_Text_Contents dark:border-Dark_Layout-400 rounded-[0.9375rem]">
      <Egg className="w-[6.3125rem] h-[3.8531rem] mb-[1.0625rem]" />
      <div className="text-base font-bold text-Light_Text_Name dark:text-Dark_Text_Name">{props.characterName}</div>
      <div className="flex items-center gap-x-[0.25rem]">
        <Coin className="w-[1.1875rem] h-[1.1875rem]" />
        <div className="font-nico text-[0.6875rem] text-Light_Text_Name dark:text-Dark_Text_Contents">
          {props.coinValue}
        </div>
      </div>
    </div>
  );
};

export default ShopCharacter;
