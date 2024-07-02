// import { MyBettingList } from '@/components/community/betting/BettingConstant';
import { getMyBetting } from '@/api/community/BettingApi';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
import MyBetting from '@/components/community/betting/MyBetting';
import OpenBetting from '@/components/community/betting/OpenBetting';
import { useEffect, useState } from 'react';
// import BettingModal from '@/modal/BettingModal';

const BettingPage = () => {
  const [bettings, setBettings] = useState({});

  async function fetchBetting() {
    const response = await getMyBetting();
    console.log(response);
  }

  useEffect(() => {
    fetchBetting();
  }, []);

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
