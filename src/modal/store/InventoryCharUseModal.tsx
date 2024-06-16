import { MyBlob, Slider } from '@/assets/svg';

interface InvenCharModalProps {
  characterName: string;
  characterLevel: number;
  characterExp: number;
  characterDesc: string;
  onConfirm: () => void;
  onClose: () => void;
}

const InventoryCharUseModal = (props: InvenCharModalProps) => {
  return (
    <div className="flex flex-col items-center p-10 justify-center w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      <div className="flex flex-col gap-y-4 justify-center items-center w-[9.8125rem]">
        <div className="mb-3 h-6 text-[15px] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
          적용하시겠습니까?
        </div>

        <div className="flex flex-col items-center w-[8.6875rem]">
          <MyBlob className="w-20 h-12 m-6 mt-0" />
          <div className="flex justify-center gap-x-1 w-[8.6875rem] h-4 mb-1.5">
            <div className="font-bold text-Light_Text_Name dark:text-Dark_Text_Name">{props.characterName}</div>
            <div className="content-end text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe text-[0.5625rem] dark:text-Dark_Text_Contents font-nico">
              Lv.{props.characterLevel}
            </div>
          </div>
          <div className="flex h-6">
            <Slider className="w-[7.5rem]" />
            <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe dark:text-Dark_Text_Contents text-[0.3125rem]">
              {props.characterExp}%
            </div>
          </div>

          <div className="text-[10px] w-52 text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
            {props.characterDesc}
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

export default InventoryCharUseModal;
