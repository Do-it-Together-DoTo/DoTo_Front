import { Coin, Egg } from '@/assets/svg';
import { Dispatch, SetStateAction } from 'react';

interface StoreCharModalProps {
  characterName: string;
  coinValue: number;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const StoreCharBuyModal = ({ characterName, coinValue, setIsModalOpen }: StoreCharModalProps) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-Dark_Layout-100 bg-opacity-60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-[18.75rem] w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
        <div className="flex flex-col justify-center items-center w-[9.8125rem]">
          <div className="flex flex-col gap-y-2 items-center w-[8.6875rem]  mb-[1.375rem]">
            <Egg className="w-20 h-12 m-2.5" />
            <div className="flex flex-col gap-y-1 items-center w-[8.6875rem] justify-center mb-1.5">
              <div className="font-bold text-Light_Text_Name dark:text-Dark_Text_Name">{characterName}</div>
              <div className="flex items-center gap-x-[0.25rem]">
                <Coin className="w-[1.1875rem] h-[1.1875rem]"></Coin>
                <div className="font-nico text-[0.6875rem] text-Light_Text_Name dark:text-Dark_Text_Contents">
                  {coinValue}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-2.5">
            <button className="w-[6.75rem] h-[1.5625rem] bg-Button font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]">
              구매
            </button>
            <button
              className="w-[6.75rem] h-[1.5625rem] bg-Light_Text_AboutMe font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
              onClick={closeModal}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCharBuyModal;
