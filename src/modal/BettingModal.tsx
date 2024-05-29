import { CoinIcon } from '@/assets/svg/community';
import { IBetting } from '@/components/community/betting/BettingConstant';
import { useState } from 'react';

interface BettingDetailModalProps {
  betting: IBetting;
  type: 'detail' | null;
}

const BettingModal = ({ betting, type }: BettingDetailModalProps) => {
  const [isValid] = useState(true);
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-Dark_Layout-100 bg-opacity-60" />
      <div className="absolute flex flex-col items-center gap-5 w-[25rem] px-11 py-7 bg-Light_Layout-400 border-none rounded-lg  text-Light_Text_Name top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="self-start">
          <span className="font-bold text-lg underline ">{betting.name}</span> 님은{' '}
          <span className="font-bold text-lg underline">{'TODO'}</span> 를{' '}
        </h3>
        <div className="flex gap-12 items-center">
          <div className="flex flex-col items-center  gap-4">
            <p className="font-bold text-2xl">한다</p>
            <p className="flex items-center">
              <CoinIcon width="30" height="30" />
              <span className="font-bold text-2xl">20</span>
            </p>
          </div>
          <span className="font-bold text-2xl">VS</span>
          <div className="flex flex-col items-center  gap-4">
            <p className="font-bold text-2xl">안한다</p>
            <p className="flex items-center ">
              <CoinIcon width="30" height="30" />
              <span className="font-bold text-2xl">80</span>
            </p>
          </div>
        </div>
        {type === 'detail' ? (
          <p>
            <span className="font-bold text-xl">40명</span>의 친구가 베팅에 참여했어요
          </p>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center">
              <CoinIcon width="30" height="30" />
              {/* TODO:제한 로직 걸어야함. 10~50, 베팅금액 부족 */}
              <input className="border-b px-4 w-20 focus:outline-none" />를 베팅할게요.
            </div>
            <p>{isValid ? '유효' : '금액이 부족합니다.'}</p>
          </div>
        )}
        <button className="w-full h-10  bg-Button text-Light_Layout-400 text-base rounded-[0.625rem] font-bold">
          {type === 'detail' ? '채팅방 가기' : '베팅하기'}
        </button>
      </div>
    </>
  );
};

export default BettingModal;
