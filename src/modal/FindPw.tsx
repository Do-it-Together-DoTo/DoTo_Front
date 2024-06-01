import React, { useState, useEffect } from 'react';

const FindPw = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({
    email: false,
    verificationCode: false,
    password: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = useState({
    email: '',
    verificationCode: '',
    password: '',
    confirmPassword: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-{};:'",.<>/?\\|[\]~`]).{8,16}$/;
    return passwordRegex.test(password);
  };

  useEffect(() => {
    const newErrors = { email: '', verificationCode: '', password: '', confirmPassword: '' };

    if (touched.email && !validateEmail(email)) {
      newErrors.email = '유효한 이메일을 입력하세요.';
    }
    if (touched.verificationCode && verificationCode.length === 0) {
      newErrors.verificationCode = '인증 코드를 입력하세요.';
    }
    if (touched.password && !validatePassword(password)) {
      newErrors.password = '비밀번호는 8자 이상 16자 이하이며, 숫자, 영문, 특수문자를 포함해야 합니다.';
    }
    if (touched.confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }
    setErrors(newErrors);
    const isValid = !Object.values(newErrors).some((error) => error !== '');
    setIsFormValid(isValid);
  }, [email, verificationCode, password, confirmPassword, touched]);

  const handleChangePassword = () => {
    if (!errors.email && !errors.verificationCode && !errors.password && !errors.confirmPassword) {
      -console.log('비밀번호 변경 성공');
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setTouched({ ...touched, email: true })}
          />
          <button className="w-[4.4375rem] h-[1.1875rem] text-Light_Text_AboutMe font-pre border border-1 border-Light_Text_AboutMe rounded-lg rounded-20 text-[8px]">
            인증번호 발송
          </button>
        </div>
        <div className="w-[16.625rem] h-[0rem] mt-[0.375rem] border border-1 border-Dark_Text_Contents" />
        <div className="h-[0.875rem]">
          <div className="w-[16.625rem] font-pre text-[7px] text-error">{touched.email && errors.email}</div>
        </div>
        <div className="w-[16.625rem] flex justify-between mt-[0.75rem]">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="인증 번호"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            onFocus={() => setTouched({ ...touched, verificationCode: true })}
          />
          <div className="w-[3.625rem] h-[1.625rem] flex items-center justify-between">
            <span className="font-pre text-[7px] text-Dark_Text_AboutMe">02:47</span>
            <button className="w-[2rem] h-[1rem] text-Button font-pre border border-1 border-Button rounded-lg rounded-20 text-[7px]">
              인증
            </button>
          </div>
        </div>
        <div className="w-[16.625rem] h-[0rem] border border-1 border-Dark_Text_Contents"></div>
        <div className="h-[0.875rem]">
          <div className="w-[16.625rem] font-pre text-[7px] text-error">
            {touched.verificationCode && errors.verificationCode}
          </div>
        </div>

        <div className="w-[16.625rem] mt-[2.375rem] flex justify-between">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setTouched({ ...touched, password: true })}
          />
        </div>
        <div className="w-[16.625rem] h-[0rem] mt-[0.375rem] border border-1 border-Dark_Text_Contents" />
        <div className="h-[0.875rem]">
          <div className="w-[16.625rem] font-pre text-[7px] text-error">{touched.password && errors.password}</div>
        </div>
        <div className="w-[16.625rem] mt-[2.375rem] flex justify-between">
          <input
            className="font-bold font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[12px]"
            placeholder="비밀번호 확인"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={() => setTouched({ ...touched, confirmPassword: true })}
          />
        </div>
        <div className="w-[16.625rem] h-[0rem] mt-[0.375rem] border border-1 border-Dark_Text_Contents" />
        <div className="h-[0.875rem]">
          <div className="w-[16.625rem] font-pre text-[7px] text-error">
            {touched.confirmPassword && errors.confirmPassword}
          </div>
        </div>
        <button
          className={`mt-[2.5rem] w-[17.625rem] h-[2.3125rem] bg-Button font-pre font-bold text-Light_Layout-100 text-[15px] border rounded-lg rounded-10 ${!isFormValid && 'opacity-50 cursor-not-allowed}'}`}
          onClick={handleChangePassword}
          disabled={!isFormValid}
        >
          비밀번호 변경
        </button>
      </div>
    </div>
  );
};

export default FindPw;
