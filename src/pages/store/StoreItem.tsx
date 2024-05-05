import { Egg, Coin } from '@/assets/svg';

const StoreItem = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[8.4375rem] h-[10.625rem] border border-solid border-Dark_Text_Contents rounded-[0.9375rem]">
      <Egg className="w-[6.3125rem] h-[3.8531rem] mb-[1.0625rem]" />
      <div className="flex flex-col items-center justify-center gap-y-[0.75rem]">
        <div className="text-base font-bold text-Light_Text_Name">아이템 이름</div>
        <div className="flex items-center gap-x-[0.25rem]">
          <Coin className="w-[1.1875rem] h-[1.1875rem]"></Coin>
          <div className="font-nico text-[0.6875rem] text-Light_Text_Name">300</div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
