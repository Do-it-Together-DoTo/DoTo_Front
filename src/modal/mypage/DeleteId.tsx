const DeleteId = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Dark_Layout-100 bg-opacity-60">
      <div className="relative  w-[20.5625rem] h-[18rem] bg-Light_Layout-200 flex flex-col items-center rounded-[1rem] dark:bg-Dark_Layout-200">
        <h1 className="mt-[3rem] text-Light_Text_Name text-[1rem] dark:text-Dark_Text_Name">계정 삭제</h1>
        <p className="mt-[3rem] text-Light_Text_Name text-[0.8125rem] text-center dark:text-Dark_Text_Name">
          계정 삭제 시 정보 및 보유중인 코인은 <br />
          삭제되어 <span className="text-[0.8125rem] text-error">복구가 불가</span>합니다.
        </p>
        <div className="mt-[1.4375rem] flex items-center  h-[1.8175]">
          <input type="checkbox" name="isCheck" value={'isCheck'} id="isCheck" />
          <label
            htmlFor="isCheck"
            className="pl-[0.5rem] text-[10px] font-pre text-Light_Text_Name dark:text-Dark_Text_Name"
          >
            위 사항을 확인 하였으며, 삭제를 진행합니다.
          </label>
        </div>
        <div className="mt-[1.5625rem] flex w-[16.1875rem] justify-between">
          <button className="mx-auto w-[7.6875rem] h-[2.125rem] bg-Light_Layout-100 font-pre text-Light_Text_AboutMe text-[0.9375rem] rounded-[1.5625rem]">
            삭제
          </button>
          <button className="mx-auto w-[7.6875rem] h-[2.125rem] bg-Button font-pre text-Light_Layout-400 text-[0.9375rem]  rounded-[1.5625rem]">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteId;
