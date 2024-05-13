const ChangePasswordPage = () => {
  //TODO 비밀번호 정규식 로직 , 비동기 통신
  return (
    <div className="flex flex-col items-center w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300">
      <h1 className="mt-[3.25rem] h-[2rem] text-Light_CategoryText_Icon_Contents font-semibold text-[1.625rem] dark:text-Dark_Text_Name">비밀번호 변경</h1>
      <div className="mt-[5.5rem] flex flex-col w-[47.875rem] h-[32.25rem]  bg-Light_Layout-100 rounded-lg rounded-[0.9375rem] dark:bg-Dark_Layout-200">
        <div className="mt-[5.6875rem] flex w-[33.375rem] h-[3rem] ml-[8.125rem]">
          <label
            className="w-[6.6875rem] h-[1.5rem] font-pre text-[1.25rem] text-Light_Text_Name dark:text-Dark_Text_Name tracking-[-0.02rem]"
            htmlFor="nowPw"
          >
            현재 비밀번호
          </label>
          <div className="w-[25.0625rem] ml-[1.625rem]">
            <input
              className="w-[24.375rem] bg-Light_Layout-100 placeholder-Dark_Text_Contents dark:placeholder-Dark_Text_Name text-[0.85rem] dark:bg-Dark_Layout-200"
              placeholder="현재 비밀번호"
              type="text"
              name="nowPw"
            />
            <div className="w-[24.375rem] h-[0rem] border border-1 border-Dark_Text_Contents" />
            <div className="font-pre text-[0.6rem] text-error mt-[0.25rem]">
              비밀번호가 일치하지 않습니다.
            </div>
          </div>
        </div>
        <div className="mt-[3.25rem] flex w-[32.3125rem] h-[3rem] ml-[9.1875rem]">
          <label
            className="w-[5.625rem] h-[1.5rem] font-pre text-[1.25rem] text-Light_Text_Name dark:text-Dark_Text_Name tracking-[-0.02rem]"
            htmlFor="newPw"
          >
            새 비밀번호
          </label>
          <div className="w-[25.0625rem] ml-[1.625rem]">
            <input
              className="w-[24.375rem] bg-Light_Layout-100 placeholder-Dark_Text_Contents dark:placeholder-Dark_Text_Name text-[0.85rem] dark:bg-Dark_Layout-200"
              placeholder="새 비밀번호"
              type="text"
              name="newPw"
            />
            <div className="w-[24.375rem] h-[0rem] border border-1 border-Dark_Text_Contents" />
            <div className="font-pre text-[0.6rem] text-error mt-[0.25rem]">
              8자 이상 16자 이하로 사용 가능하며 숫자, 영문, 특수문자를 포함해야 합니다.
            </div>
          </div>
        </div>
        <div className="mt-[3.25rem] flex w-[34.75rem] h-[3rem] ml-[6.75rem]">
          <label
            className="h-[1.5rem] font-pre text-[1.25rem] text-Light_Text_Name dark:text-Dark_Text_Name tracking-[-0.02rem]"
            htmlFor="newPwCheck"
          >
            새 비밀번호 확인
          </label>
          <div className="w-[25.0625rem] ml-[1.625rem]">
            <input
              className="w-[24.375rem] bg-Light_Layout-100 placeholder-Dark_Text_Contents dark:placeholder-Dark_Text_Name text-[0.85rem] dark:bg-Dark_Layout-200"
              placeholder="비밀번호 확인"
              type="text"
              name="newPwCheck"
            />
            <div className="w-[24.375rem] h-[0rem] border border-1 border-Dark_Text_Contents" />
            <div className="font-pre text-[0.6rem] text-error mt-[0.25rem]">
              비밀번호가 일치하지 않습니다.
            </div>
          </div>
        </div>
        <button className="mt-[3.8125rem] mx-auto w-[11.0625rem] h-[3rem] bg-Button font-pre text-Light_Layout-100 text-[1.5625rem] border rounded-lg rounded-[1.5625rem]">
          변경
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
