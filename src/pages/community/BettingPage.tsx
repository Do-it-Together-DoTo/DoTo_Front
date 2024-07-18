import CommunityPageLayout from '@/components/community/CommunityPageLayout';
import MyBetting from '@/components/community/betting/MyBetting';
import OpenBetting from '@/components/community/betting/OpenBetting';

const BettingPage = () => {
  return (
    <CommunityPageLayout>
      <MyBetting />
      <OpenBetting />
    </CommunityPageLayout>
  );
};

export default BettingPage;
