import { ModelCloseButton, EggHatched } from '@/assets/svg';

const ShopHatchModal = () => {
  return (
    <div className="flex flex-col items-center p-8 justify-center relative h-[18.75rem] w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      {/* <button onClick={props.onClose}> */}
      <button className="absolute top-5 right-5">
        <ModelCloseButton className="w-[15px] h-[15px]" />
      </button>
      <div className="flex flex-col justify-center items-center w-[9.8125rem] h-auto">
        {/* <EggHatched className="w-[75px] h-[90px] m-[30px]" /> */}
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
            // onClick={props.onConfirm}
          >
            보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopHatchModal;
