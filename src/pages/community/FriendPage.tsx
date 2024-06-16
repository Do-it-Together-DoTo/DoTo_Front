import Friends from '@/components/community/friend/FriendList';
import SearchFriends from '@/components/community/friend/SearchFriends';
// import FriendModal from '@/modal/FriendModal';
import CommunityPageLayout from '@/components/community/CommunityPageLayout';
const FriendPage = () => {
  return (
    <CommunityPageLayout>
      <div className="flex gap-8">
        {/* <FriendModal type="block" /> */}
        <SearchFriends />
        <Friends />
      </div>
    </CommunityPageLayout>
  );
};

export default FriendPage;
