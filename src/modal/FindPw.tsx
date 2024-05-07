const FindPw = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Dark_Layout-100 bg-opacity-60">
      <div className="relative flex flex-col items-center w-[20.875rem] h-[40.4375rem] bg-Light_Layout-400 border-none rounded-lg rounded-15">
        <button className="absolute top-[0.8125rem] right-[0.4375rem] w-[1.1875rem] h-[1.1875rem] font-pre font-bold text-center text-Light_Text_Name">
          X
        </button>
        <h1 className="mt-[3.5rem] text-center font-pre font-bold text-Light_Text_Name text-[15px] w-[20.875rem] h-[2.125rem]">
          비밀번호 찾기
        </h1>
        <div className="mt-[4rem] w-[16.625rem] flex justify-between">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="가입한 이메일"
          />
          <button className="w-[4.4375rem] h-[1.1875rem] text-Light_Text_AboutMe font-pre border border-1 border-Light_Text_AboutMe rounded-lg rounded-20 text-[8px]">
            인증번호 발송
          </button>
        </div>
        <div className="w-[16.625rem] h-[0rem] mt-[0.375rem] border border-1 border-Dark_Text_Contents" />
        <div className="w-[16.625rem] flex justify-between mt-[0.75rem] ">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="인증 번호"
          />
          <div className="w-[3.625rem] h-[1.625rem] flex items-center justify-between">
            <span className=" font-pre text-[7px] text-Dark_Text_AboutMe">02:47</span>
            <button className="w-[2rem] h-[1rem] text-Button font-pre border border-1 border-Button rounded-lg rounded-20 text-[7px]">
              인증
            </button>
          </div>
        </div>
        <div className="w-[16.625rem] h-[0rem] border border-1 border-Dark_Text_Contents"></div>

        <div className="w-[16.625rem] mt-[2.375rem] flex justify-between">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="비밀번호"
          />
        </div>
        <div className="w-[16.625rem] h-[0rem] mt-[0.375rem] border border-1 border-Dark_Text_Contents" />
        <div className="w-[16.625rem] font-pre text-[7px] text-error">
          8자 이상 16자 이하로 사용 가능하며 숫자, 영문, 특수문자를 포함해야 합니다.
        </div>

        <div className="w-[16.625rem] mt-[2.375rem] flex justify-between">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="비밀번호 확인"
          />
        </div>
        <div className="w-[16.625rem] h-[0rem] mt-[0.375rem] border border-1 border-Dark_Text_Contents" />
        <div className="w-[16.625rem] font-pre text-[7px] text-error">비밀번호가 일치하지 않습니다.</div>
        <button className="mt-[2.5rem] w-[17.625rem] h-[2.3125rem] bg-Button font-pre font-bold text-Light_Layout-100 text-[15px] border rounded-lg rounded-10">
          비밀번호 변경
        </button>
      </div>
    </div>
  );
};

export default FindPw;
