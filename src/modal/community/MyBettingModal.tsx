import { CoinIcon } from '@/assets/svg/community';
import { IBetting } from '@/api/community/Betting.Interface';
import { useState } from 'react';
import { useBettingModal } from '@/hooks/community/useBettingModal';
import CheckBox from '@/components/common/checkbox/Checkbox';

interface BettingDetailModalProps {
  betting: IBetting;
  type: 'detail' | 'bet';
  onClose: () => void;
}

const BettingModal = ({ betting, type, onClose }: BettingDetailModalProps) => {
  const [isValid] = useState(true);
  const [isDo, setIsDo] = useState(true);

  const { bettingDetail, handleChange, handleSubmit } = useBettingModal({
    betting: betting,
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-Dark_Layout-100 bg-opacity-60" onClick={onClose} />
      <form
        onSubmit={handleSubmit}
        className="absolute flex flex-col items-center gap-5 w-[25rem] px-11 py-7 bg-Light_Layout-400 border-none rounded-lg  text-Light_Text_Name top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h3 className="self-start">
          <span className="font-bold text-lg underline ">{bettingDetail?.memberNickname}</span> 님은 &nbsp;
          <span className="font-bold text-lg underline">{bettingDetail?.todoContents}</span> 를
        </h3>
        <div className="flex gap-12 items-center">
          <div className="flex flex-col items-center  gap-4" onClick={() => setIsDo(true)}>
            <p className="font-bold text-2xl">한다</p>
            <p className="flex items-center">
              <CoinIcon width="2rem" height="2rem" />
              <span className="font-bold text-2xl">{bettingDetail?.successCoins}</span>
            </p>
          </div>
          <span className="font-bold text-2xl">VS</span>
          <div className="flex flex-col items-center  gap-4" onClick={() => setIsDo(false)}>
            <p className="font-bold text-2xl">안한다</p>
            <p className="flex items-center ">
              <CoinIcon width="2rem" height="2rem" />
              <span className="font-bold text-2xl">{bettingDetail?.failureCoins}</span>
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
              <CheckBox
                className="flex [&>input]:hidden text-Button font-bold text-xl"
                checked={isDo}
                onChange={setIsDo}
              >
                <p>{isDo ? '한다' : '안한다'} </p>
              </CheckBox>
              에
              <CoinIcon width="2rem" height="2rem" />
              {/* TODO:제한 로직 걸어야함. 10~50, 베팅금액 부족 */}
              <input name="cost" onChange={handleChange} className="border-b px-4 w-20 focus:outline-none" />를
              베팅할게요.
            </div>
            <p>{isValid ? '유효' : '금액이 부족합니다.'}</p>
          </div>
        )}

        <button className="w-full h-10  bg-Button text-Light_Layout-400 text-base rounded-[0.625rem] font-bold">
          {type === 'detail' ? '채팅방 가기' : '베팅하기'}
        </button>
      </form>
    </>
  );
};

export default BettingModal;
