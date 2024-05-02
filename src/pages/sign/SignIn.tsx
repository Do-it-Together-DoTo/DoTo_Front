import React from 'react';
import {Logo2,KakaoIcon,NaverIcon,GoogleIcon}  from '@/assets/svg';


const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className='w-[22.5rem] h-[42.25rem] flex flex-col items-center'>
        <Logo2 width="187.57" height="40" className="mt-[6.75rem] fill-Light_Text_Name dark:fill-Dark_Text_Name" />
        <form className='mt-[6.9375rem] flex flex-col justify-center'>
          <input type='text' className='w-[19.875rem] h-[2.75rem] pl-[0.875rem] outline-none font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[15px] border border-1 rounded-lg rounded-10 border-Dark_Text_Contents' placeholder='아이디 입력'/>
          <input type='text' className='mt-[1rem] w-[19.875rem] h-[2.75rem] pl-[0.875rem] outline-none font-pre text-Light_Text_Name placeholder-Dark_Text_Contents text-[15px] border border-1 rounded-lg rounded-10 border-Dark_Text_Contents' placeholder='비밀번호 입력'/>
          <div className='mt-[0.1875rem] flex items-center w-[5.3125rem] h-[1.8175]'>
            <input type='checkbox' name='isCheck' value={"isCheck"} id='isCheck'/><label htmlFor='isCheck' className='pl-[0.5rem] text-[10px] font-pre text-Dark_Text_Contents'>자동 로그인</label>
           </div>
        </form>
        <button className='mt-[1.75rem] w-[19.875rem] h-[2.75rem] bg-Button font-pre font-bold text-Light_Layout-100 text-[15px] border rounded-lg rounded-10'>로그인</button>
        <div className='my-[1.375rem] w-[19.875rem] flex items-center'>
          <div className='ml-[5.3125rem] font-bold font-pre text-Light_Text_Name text-[12px]'>비밀번호 찾기</div>
          <div className='ml-[0.375rem] mr-[0.3125rem] w-[0rem] h-[1.125rem] border border-1 border-Dark_Text_Contents'/>
          <div className='font-bold font-pre text-Light_Text_Name text-[12px]'>회원가입</div>
        </div>
        <div className='flex items-center'>
          <div className='w-[7rem] h-[0rem] border border-1 border-Dark_Text_Contents'/>
          <div className='px-[0.4rem] font-pre text-Dark_Text_Contents text-[12px]'>SNS 계정으로</div>
          <div className='w-[7rem] h-[0rem] border border-1 border-Dark_Text_Contents'/>
          <div>
          </div>
        </div>
      <div className='mt-[1.375rem] flex items-center space-x-[2rem] w-[13.875rem] ju'>
              <KakaoIcon width="50" height="50"/>
              <NaverIcon width="50" height="50"/>
              <GoogleIcon width="50" height="50"/>

      </div>
         
    </div>
    </div>
  );
};

export default SignIn;
