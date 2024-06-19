import { IMember } from './FriendConstant';
import { FRIEND_LIST } from '@/dummy/Friend';
import FriendItem from './FriendItem';
import { useState, useEffect } from 'react';
const Friends = () => {
  const [friends, setFriends] = useState<IMember[]>([]);
  useEffect(() => {
    setFriends(FRIEND_LIST);
  }, []);
  return (
    <section className="flex flex-col gap-6 w-[25.6875rem] mb:w-full items-center">
      <h2 className="text-[1.625rem] text-Light_CategoryText_Icon_Contents">친구 목록</h2>
      <div className="w-[24rem] mb:h-full mb:w-full h-[28rem] rounded-[1.875rem] mb:bg-Light_Layout-200 bg-Light_Layout-400 flex flex-col items-center px-8 py-[1.1875rem] gap-4 overflow-y-auto scrollbar-hide dark:bg-Dark_Layout-400">
        {friends.map((friend) => (
          <FriendItem key={friend.memberId} member={friend} />
        ))}
      </div>
    </section>
  );
};

export default Friends;
