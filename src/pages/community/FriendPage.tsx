import Friends from '@/components/community/friend/FriendList';
import SearchFriends from '@/components/community/friend/SearchFriends';

const FriendPage = () => {
  return (
    <main className="w-[54rem] h-[calc(100vh-3.1875rem)] flex bg-Light_Layout-200 dark:bg-Dark_Layout-300 justify-center px-5 py-20 gap-8">
      <SearchFriends />
      <Friends />
    </main>
  );
};

export default FriendPage;
