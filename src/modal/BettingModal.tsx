import { CoinIcon } from '@/assets/svg/community';
import { IBetting } from '@/components/community/betting/BettingConstant';

interface BettingDetailModalProps {
  betting: IBetting;
}

const BettingModal = ({ betting }: BettingDetailModalProps) => {
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
        <p>
          <span className="font-bold text-xl">40명</span>의 친구가 베팅에 참여했어요
        </p>
        <button className="w-full h-10 bg-Button text-Light_Layout-400 text-base rounded-[0.625rem] font-bold">
          채팅방 가기
        </button>
      </div>
    </>
  );
};

export default BettingModal;
