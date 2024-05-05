import FriendItem from '@/components/community/friend/FriendItem';

const FriendList = () => {
  return (
    <section className="flex flex-col gap-6 w-[25.6875rem] items-center">
      <h2 className="text-[1.625rem] text-Light_CategoryText_Icon_Contents">친구 목록</h2>
      <div className="w-[25.6875rem] h-[24.1875rem] rounded-[1.875rem] bg-Light_Layout-400 flex flex-col items-center px-8 py-[1.1875rem] gap-4 overflow-y-scroll">
        {friends.map((friend) => (
          <FriendItem key={friend.memberId} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default FriendList;
