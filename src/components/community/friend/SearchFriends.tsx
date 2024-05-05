import { MEMBER_LIST, IMember } from './FriendConstant';
import FriendItem from './FriendItem';
import { useState, useEffect } from 'react';

const SearchFriends = () => {
  const [members, setMembers] = useState<IMember[]>([]);
  useEffect(() => {
    setMembers(MEMBER_LIST);
  }, []);
  return (
    <section className="flex flex-col gap-6 w-[25.6875rem] items-center ">
      <h2 className="text-[1.625rem] text-Light_CategoryText_Icon_Contents">친구 ID 검색</h2>
      <input
        className="w-full text-center h-8 bg-Dark_Text_Contents text-Light_CategoryText_Icon_Contents placeholder:text-Light_CategoryText_Icon_Contents rounded-[0.625rem]"
        placeholder="친구 닉네임을 입력해주세요."
      />
      <div className="w-[24rem] h-[24.1875rem] rounded-[1.875rem] bg-Light_Layout-400 flex flex-col items-center px-8 py-[1.1875rem] gap-4 overflow-y-scroll">
        {members.map((member) => (
          <FriendItem key={member.memberId} member={member} isFriend={false} />
        ))}
      </div>
    </section>
  );
};

export default SearchFriends;
