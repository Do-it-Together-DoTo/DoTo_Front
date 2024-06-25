// import { MyBettingList } from '@/components/community/betting/BettingConstant';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
import MyBetting from '@/components/community/betting/MyBetting';
import OpenBetting from '@/components/community/betting/OpenBetting';
// import BettingModal from '@/modal/BettingModal';

const BettingPage = () => {
  return (
    <CommunityPageLayout>
      {/* <BettingModal betting={MyBettingList[0]} /> */}
      {/* <BettingModal betting={MyBettingList[0]} type="detail" /> */}
      <MyBetting />
      <OpenBetting />
    </CommunityPageLayout>
  );
};

export default BettingPage;
