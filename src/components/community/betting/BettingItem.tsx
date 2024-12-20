import { CharacterProfileIcon } from '@/assets/svg/community';
import type { Betting } from '@/types/community/Betting.tsx';
import useModal from '@/hooks/useModal';
import BettingDetailModal from '@/modal/community/BettingDetailModal';
import OpenBettingModal from '@/modal/community/OpenBettingModal';

type BettingItemProps = {
  betting: Betting;
  type: 'open' | 'my';
  isParticipate: boolean;
};

const BettingItem = ({ betting, isParticipate, type }: BettingItemProps) => {
  const { open, close, Modal } = useModal();
  return (
    <div
      onClick={open}
      className="flex items-center w-full h-[40px] dt:py-3 dt:gap-14 rounded-xl border-[0.1rem] border-Dark_Text_Contents text-xs text-Light_CategoryText_Icon_Contents pl-4 pr-16 justify-between dark:text-Dark_CategoryText_Icon dark:border-Dark_CategoryText_Icon"
    >
      <CharacterProfileIcon width={'1.5rem'} height={'1.5rem'} />
      <p className="font-bold">{betting.memberNickname}</p>
      <p>{betting.bettingName}</p>
      {isParticipate ? <p>자세히 보기</p> : <p>참여하기</p>}
      <Modal>
        {type === 'open' ? (
          <OpenBettingModal betting={betting} onClose={close} />
        ) : (
          <BettingDetailModal betting={betting} onClose={close} />
        )}
      </Modal>
    </div>
  );
};

export default BettingItem;
