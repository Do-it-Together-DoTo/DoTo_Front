const DeleteAccountPage = () => {
  return (
    <div className="flex flex-col items-center  w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300">
      <h1 className="mt-[3.25rem] text-Light_Text_Name text-[1.625rem] font-semibold dark:text-Dark_Text_Name">
        계정 삭제
      </h1>
      <div className="mt-[7.5rem] relative  w-[45rem] h-[30rem] bg-Light_Layout-300 flex flex-col items-center rounded-[1rem] dark:bg-Dark_Layout-200">
        <p className="mt-[5rem] text-Light_Text_Name text-[1.25rem] text-center dark:text-Dark_Text_Name">
          <span className="text-[1.25rem] text-Light_Text_Name font-bold dark:text-Dark_Text_Name">닉네임 </span>
          님, 계정을 정말 삭제하시겠습니까 ?
        </p>
        <p className="mt-[3rem] text-Light_Text_Name text-[1.25rem] text-center dark:text-Dark_Text_Name">
          계정 삭제 시 정보 및 보유중인 코인은 <br />
          삭제되어 <span className="text-[1.25rem] text-error">복구가 불가</span>합니다.
        </p>
        <div className="mt-[3rem] flex items-center  h-[1.8175]">
          <input type="checkbox" name="isCheck" value={'isCheck'} id="isCheck" />
          <label
            htmlFor="isCheck"
            className="pl-[0.5rem] text-[1.25rem] font-pre text-Light_Text_Name dark:text-Dark_Text_Name"
          >
            위 사항을 확인 하였으며, 삭제를 진행합니다.
          </label>
        </div>
        <div className="mt-[3rem] flex w-[16.1875rem] justify-between">
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

export default DeleteAccountPage;
