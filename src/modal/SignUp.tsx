const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Dark_Layout-100 bg-opacity-60">
      <div className="relative flex flex-col items-center w-[20.875rem] h-[40.4375rem] bg-Light_Layout-400 border-none rounded-lg rounded-15">
        <button className="absolute top-[0.8125rem] right-[0.4375rem] w-[1.1875rem] h-[1.1875rem] font-pre font-bold text-center text-Light_Text_Name">
          X
        </button>
        <h1 className="text-center font-pre font-bold text-Light_Text_Name text-[15px] w-[20.875rem] h-[2.125rem]">
          가입하기
        </h1>
        <div className="w-[16.625rem] flex justify-between">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="이메일"
          />
          <button className="w-[4.4375rem] h-[1.1875rem] text-Light_Text_AboutMe font-pre border border-1 border-Light_Text_AboutMe rounded-lg rounded-20 text-[8px]">
            인증번호 발송
          </button>
        </div>
        <div className="w-[16.625rem] h-[0rem] mt-[0.375rem] border border-1 border-Dark_Text_Contents" />
        <div className="w-[16.625rem] flex justify-between">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="인증 번호"
          />
          <div className="w-[3.625rem] h-[1.625rem] flex items-center justify-between">
            <span className="w-[2rem] h-[1.625rem] inline-block align-middle font-pre text-[7px] text-Dark_Text_AboutMe">
              02:47
            </span>
            <button className="w-[2rem] h-[1rem]text-Light_Text_AboutMe font-pre border border-1 border-Light_Text_AboutMe rounded-lg rounded-20 text-[8px]">
              인증
            </button>
          </div>
        </div>
        <div className="w-[16.625rem] h-[0rem] mt-[0.375rem] border border-1 border-Dark_Text_Contents"></div>
      </div>
    </div>
  );
};

export default SignUp;
