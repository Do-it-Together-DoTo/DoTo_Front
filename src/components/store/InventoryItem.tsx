import { RareBadge, NormalBadge, MagicPotion1, MagicPotion2 } from '@/assets/svg';

type propstype = {
  itemName: string;
  isRare: boolean;
  itemValue: number;
};
const InventoryItem = (props: propstype) => {
  return (
    <div className="flex flex-col justify-center items-center w-[8.4375rem] h-[10.625rem] border border-solid border-Dark_Text_Contents dark:border-Dark_Layout-400 rounded-[0.9375rem]">
      {props.isRare === true ? (
        <MagicPotion1 className="w-[3.8144rem] h-[3.8144rem] mb-[1rem]" />
      ) : (
        <MagicPotion2 className="w-[3.8144rem] h-[3.8144rem] mb-[1rem]" />
      )}
      <div className="flex flex-col items-center justify-center gap-y-[0.125rem]">
        <div className="text-base font-bold text-Light_Text_Name dark:text-Dark_Text_Name">{props.itemName}</div>
        {props.isRare === true ? <RareBadge className="h-[0.8506rem]" /> : <NormalBadge className="h-[0.8506rem]" />}
        <div className="flex items-center gap-x-[0.25rem]">
          <div className="font-nico text-[0.6875rem] text-Light_Text_Name dark:text-Dark_Text_Contents">
            × {props.itemValue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
