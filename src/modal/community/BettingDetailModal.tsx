/* eslint-disable react-hooks/exhaustive-deps */
import { CoinIcon } from '@/assets/svg/community';
import { IBetting, IBettingDetail } from '@/api/community/Betting.Interface';
import { useEffect, useState } from 'react';
import { getBetting } from '@/api/community/BettingApi';
import { Link } from 'react-router-dom';

interface BettingDetailModalProps {
  betting: IBetting;
  onClose: () => void;
}

const BettingDetailModal = ({ betting, onClose }: BettingDetailModalProps) => {
  const [bettingDetail, setBettingDetail] = useState<IBettingDetail>();

  const fetchBettingDetail = async () => {
    try {
      const response = await getBetting(betting.bettingId);
      setBettingDetail(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBettingDetail();
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-Dark_Layout-100 bg-opacity-60" onClick={onClose} />
      <form className="absolute flex flex-col items-center gap-5 w-[25rem] px-11 py-7 bg-Light_Layout-400 border-none rounded-lg  text-Light_Text_Name top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="self-start">
          <span className="font-bold text-lg underline ">{bettingDetail?.memberNickname}</span> 님은 &nbsp;
          <span className="font-bold text-lg underline">{bettingDetail?.todoContents}</span> 를
        </h3>
        <div className="flex gap-12 items-center">
          <div className="flex flex-col items-center  gap-4">
            <p className="font-bold text-2xl">한다</p>
            <p className="flex items-center">
              <CoinIcon width="2rem" height="2rem" />
              <span className="font-bold text-2xl">{bettingDetail?.successCoins}</span>
            </p>
          </div>
          <span className="font-bold text-2xl">VS</span>
          <div className="flex flex-col items-center  gap-4">
            <p className="font-bold text-2xl">안한다</p>
            <p className="flex items-center ">
              <CoinIcon width="2rem" height="2rem" />
              <span className="font-bold text-2xl">{bettingDetail?.failureCoins}</span>
            </p>
          </div>
        </div>

        <p>
          <span className="font-bold text-xl">{bettingDetail?.participantCount}명</span>의 친구가 베팅에 참여했어요
        </p>
        <Link to={`/community/chatting/${bettingDetail?.chatRoomId}`} className="w-full">
          <button className="w-full h-10  bg-Button text-Light_Layout-400 text-base rounded-[0.625rem] font-bold">
            채팅방 가기
          </button>
        </Link>
      </form>
    </>
  );
};

export default BettingDetailModal;
