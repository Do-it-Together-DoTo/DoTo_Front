import Friends from '@/components/community/friend/FriendList';
import SearchFriends from '@/components/community/friend/SearchFriends';
// import FriendModal from '@/modal/FriendModal';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
import { useDeviceSize } from '@/hooks/useDeviceSize';
import MenuBar from '@/components/community/friend/MenuBar';
import useRadioStore from '@/store/radioStore';

const FriendPage = () => {
  const { isDesktop, isMobile } = useDeviceSize();
  const checkedValue = useRadioStore((state) => state.checkedValue);
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
          {checkedValue === 'search' ? <SearchFriends /> : <Friends />}
        </div>
      )}
    </CommunityPageLayout>
  );
};

export default FriendPage;
