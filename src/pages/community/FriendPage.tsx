import Friends from '@/components/community/friend/FriendList';
import SearchFriends from '@/components/community/friend/SearchFriends';
import { useState } from 'react';
// import FriendModal from '@/modal/FriendModal';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
import { useDeviceSize } from '@/hooks/useDeviceSize';
import MenuBar from '@/components/community/friend/MenuBar';

const FriendPage = () => {
  const { isDesktop, isMobile } = useDeviceSize();
  const [menuName, setMenuName] = useState('search');

  return (
    <CommunityPageLayout>
      {isDesktop && (
        <div className="flex gap-8">
          {/* <FriendModal type="block" /> */}
          <SearchFriends />
          <Friends />
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col gap-8">
          {/* <FriendModal type="block" /> */}
          <MenuBar />
          <SearchFriends />
          <Friends />
        </div>
      )}
    </CommunityPageLayout>
  );
};

export default FriendPage;
