import { ModelCloseButton, Effect, MyBlob } from '@/assets/svg';

const NewCharModal = () => {
  return (
    <div className="flex flex-col items-center p-8 relative justify-center h-[18.75rem] w-[18.75rem] bg-Light_Layout-100 dark:bg-Dark_Layout-400 rounded-[15px]">
      {/* <button onClick={props.onClose}> */}
      <button className="absolute top-5 right-5">
        <ModelCloseButton className="w-[15px] h-[15px]" />
      </button>

      <div className="flex flex-col justify-center items-center w-[9.8125rem]">
        <div className="relative">
          <Effect className="fixed absolute" />
          {/* <MyBlob className="w-[109px] h-[73px] m-[30px] z-10" /> */}
          <MyBlob className="w-[50%] h-[50%] m-[30px] z-10" />
        </div>
        <div className="flex flex-col gap-y-2 items-center w-[8.6875rem] mb-[1.375rem]">
          <div className="font-bold font-[16px] text-Light_Text_Name dark:text-Dark_Text_Name">캐릭터1</div>
          <div className="text-[10px] w-52 text-center text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
            캐릭터설명입니다 캐릭터설명입니다 캐릭터설명입니다 캐릭터설명입니다
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCharModal;
