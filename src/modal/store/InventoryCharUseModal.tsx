import { ModelCloseButton, MyBlob, Egg, EggHatched, Effect } from '@/assets/svg';
import { useState } from 'react';

interface InvenCharModalProps {
  characterId: number;
  characterName: string;
  characterLevel: number;
  characterExp: number;
  characterDesc: string;
  onConfirm: () => void;
  onSell: () => void;
  onClose: () => void;
}

const InventoryCharUseModal = (props: InvenCharModalProps) => {
  const [modalStatus, setModalStatus] = useState('charInfo');

  // const { Modal, open, close } = useModal();
  const openHatchingModal = () => {
    setModalStatus('hatching');
  };

  const openHatchedModal = () => {
    setModalStatus('hatched');
  };

  return (
    <div className="flex flex-col items-center p-10 justify-center relative h-[18.75rem] w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      <button className="absolute top-5 right-5" onClick={props.onClose}>
        <ModelCloseButton className="w-[15px] h-[15px]" />
      </button>
      {modalStatus === 'charInfo' && (
        <div className="flex flex-col gap-y-4 justify-center items-center w-[9.8125rem]">
          <div className="flex flex-col items-center w-[8.6875rem]">
            {props.characterName === '알' ? (
              <Egg className="w-20 h-12 m-6 mt-0" />
            ) : (
              <MyBlob className="w-20 h-12 m-6 mt-0" />
            )}
            <div className="flex justify-center gap-x-1 w-[8.6875rem] h-4 mb-1.5">
              <div className="font-bold text-Light_Text_Name dark:text-Dark_Text_Name">{props.characterName}</div>
              <div className="content-end text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe text-[0.5625rem] dark:text-Dark_Text_Contents font-nico">
                Lv.{props.characterLevel}
              </div>
            </div>
            {props.characterName !== '알' && (
              <div className="flex items-center h-6">
                <div className="block w-[6.2075rem] h-1 rounded-full bg-Dark_Layout-100">
                  <div
                    className="block h-1 rounded-full bg-gradient"
                    style={{ width: `calc(0.1rem*${props.characterExp})` }}
                  />
                </div>
                <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe dark:text-Dark_Text_Contents text-[6px]">
                  {props.characterExp}%
                </div>
              </div>
            )}

            <div className="text-[10px] my-3 w-52 text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
              {props.characterDesc}
            </div>
          </div>
          <div className="flex gap-x-2.5">
            {props.characterName === '알' ? (
              <button
                className="w-[6.75rem] h-[1.5625rem] bg-Button font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
                // onClick={props.onConfirm}
                onClick={openHatchingModal}
              >
                부화하기
              </button>
            ) : (
              <>
                <button
                  className="w-[6.75rem] h-[1.5625rem] bg-Button font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
                  onClick={props.onConfirm}
                >
                  적용
                </button>
                <button
                  className="w-[6.75rem] h-[1.5625rem] bg-Button font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
                  onClick={props.onSell}
                >
                  판매
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {modalStatus === 'hatching' && (
        <div className="flex flex-col justify-center items-center w-[9.8125rem] h-auto">
          <EggHatched className="w-[50%] h-[90px] m-[30px]" />
          <div className="flex flex-col gap-y-2 items-center w-[8.6875rem] mb-[1.375rem]">
            <div className="flex flex-col gap-y-1 items-center w-[8.6875rem] justify-start">
              <div className="font-bold font-[16px] text-Light_Text_Name dark:text-Dark_Text_Name">
                알이 부화했습니다!
              </div>
            </div>
          </div>

          <div className="flex gap-x-2.5">
            <button
              className="w-[6.75rem] h-[1.5625rem] bg-Button font-pre text-Light_Layout-100 dark:text-Light_Layout-400 text-xs rounded-[1.875rem]"
              onClick={openHatchedModal}
            >
              보기
            </button>
          </div>
        </div>
      )}
      {modalStatus === 'hatched' && (
        <div className="flex flex-col justify-center items-center w-[9.8125rem]">
          <div className="relative">
            <Effect className="fixed absolute" />
            <MyBlob className="w-[50%] h-[50%] m-[30px] z-10" />
          </div>
          <div className="flex flex-col gap-y-2 items-center w-[8.6875rem] mb-[1.375rem]">
            <div className="font-bold font-[16px] text-Light_Text_Name dark:text-Dark_Text_Name">캐릭터1</div>
            <div className="text-[10px] w-52 text-center text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
              캐릭터설명입니다 캐릭터설명입니다 캐릭터설명입니다 캐릭터설명입니다
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryCharUseModal;
