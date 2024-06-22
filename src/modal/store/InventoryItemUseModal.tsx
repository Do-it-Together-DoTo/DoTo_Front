import {
  RareBadge,
  NormalBadge,
  MagicPotion1,
  MagicPotion2,
  MinusButton,
  PlusButton,
  ModelCloseButton,
} from '@/assets/svg';
import { useState } from 'react';

interface InvenItemModalProps {
  itemName: string;
  isRare: boolean;
  itemValue: number;
  onConfirm: () => void;
  onClose: () => void;
}

const InventoryItemUseModal = (props: InvenItemModalProps) => {
  const [buyNumber, setBuyNumber] = useState(1);

  const increaseNumber = () => {
    setBuyNumber(buyNumber + 1);
  };
  const decreaseNumber = () => {
    if (buyNumber > 1) {
      setBuyNumber(buyNumber - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-3 justify-center h-[18.75rem] w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      <div className="flex justify-end w-5/6">
        <button onClick={props.onClose}>
          <ModelCloseButton className="w-[15px] h-[15px]" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-[9.8125rem]">
        {/* <div className="mb-3 text-[15px] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">사용하시겠습니까?</div> */}
        <div className="flex flex-col gap-y-2 items-center w-[8.6875rem] mb-[1.375rem]">
          {props.isRare ? <MagicPotion1 className="w-20 h-12 m-2.5" /> : <MagicPotion2 className="w-20 h-12 m-2.5" />}

          <div className="flex flex-col gap-y-1 items-center w-[8.6875rem] justify-start">
            <div className="font-bold text-Light_Text_Name dark:text-Dark_Text_Name">{props.itemName}</div>
            {props.isRare ? <RareBadge className="h-4" /> : <NormalBadge className="h-4" />}
          </div>

          <div className="text-[10px] w-52 text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
            경험치 + {props.itemValue}
          </div>

          <div className="flex justify-center items-center w-[69px] h-[24px] p-[2px] bg-Light_Layout-200 rounded-[5px]">
            <button>
              <MinusButton className="w-[8px] h-[8px] m-[4px]" onClick={decreaseNumber} />
            </button>
            <div className="flex items-center justify-center w-[27px] h-[20px] bg-Light_Layout-400 border-Light_Layout-100 rounded-[5px]">
              <div className="font-bold text-[10px] text-Light_Text_Name">{buyNumber}</div>
            </div>
            <button>
              <PlusButton className="w-[8px] h-[8px] m-[4px]" onClick={increaseNumber} />
            </button>
          </div>
        </div>

        <div className="flex gap-x-2.5">
          <button
            className="w-[6.75rem] h-[1.5625rem] bg-Button font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
            onClick={props.onConfirm}
          >
            사용
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemUseModal;
