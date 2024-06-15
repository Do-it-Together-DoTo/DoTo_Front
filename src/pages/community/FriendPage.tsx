import Friends from '@/components/community/friend/FriendList';
import SearchFriends from '@/components/community/friend/SearchFriends';
// import FriendModal from '@/modal/FriendModal';

const FriendPage = () => {
  return (
    <main className="w-full h-[calc(100vh-3.1875rem)] flex bg-Light_Layout-200 dark:bg-Dark_Layout-300 justify-center px-5 py-20 gap-8">
      <div className="flex gap-8">
        {/* <FriendModal type="block" /> */}
        <SearchFriends />
        <Friends />
      </div>
    </main>
  );
};

export default FriendPage;
