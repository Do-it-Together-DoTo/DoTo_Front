import { ArrowLeftIcon,ArrowRightIcon } from "@/assets/svg";
const MydataPage = () => {
  return (
        <div className="flex flex-col items-center w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300">
          <div className="w-[12.875rem] h-[1.875rem] flex justify-center	">
            <ArrowLeftIcon width={30} height={30}/>
            <span className="w-[8rem] h-[1.875rem] flex justify-center items-center text-Light_Text_Name">2024년 4월</span>
            <ArrowRightIcon width={30} height={30}/>
          </div>
                <div className="mt-[2.5rem] fllex-col w-[49.25rem] h-[31.625rem]  bg-Light_Layout-300 rounded-lg rounded-[0.9375rem] dark:bg-Dark_Layouex ft-200">
                </div>
        </div>
  );
};

export default MydataPage;
