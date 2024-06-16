import { RareBadge, NormalBadge, MagicPotion1, MagicPotion2 } from '@/assets/svg';

interface InvenItemModalProps {
  itemName: string;
  isRare: boolean;
  itemValue: number;
  onConfirm: () => void;
  onClose: () => void;
}

const InventoryItemUseModal = (props: InvenItemModalProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-[18.75rem] w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      <div className="flex flex-col justify-center items-center w-[9.8125rem]">
        <div className="mb-3 text-[15px] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">사용하시겠습니까?</div>
        <div className="flex flex-col gap-y-2 items-center w-[8.6875rem]  mb-[1.375rem]">
          {props.isRare ? <MagicPotion1 className="w-20 h-12 m-2.5" /> : <MagicPotion2 className="w-20 h-12 m-2.5" />}

          <div className="flex flex-col gap-y-1 items-center w-[8.6875rem] justify-start mb-1.5">
            <div className="font-bold text-Light_Text_Name dark:text-Dark_Text_Name">{props.itemName}</div>
            {props.isRare ? <RareBadge className="h-4" /> : <NormalBadge className="h-4" />}
          </div>
        </div>

        <div className="flex gap-x-2.5">
          <button
            className="w-[6.75rem] h-[1.5625rem] bg-Button font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
            onClick={props.onConfirm}
          >
            적용
          </button>

          <button
            className="w-[6.75rem] h-[1.5625rem] bg-Light_Text_AboutMe font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
            onClick={props.onClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemUseModal;
