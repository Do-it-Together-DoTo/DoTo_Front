import { MEMBER_LIST } from '@/dummy/Friend';
import FriendItem from './FriendItem';
import { useState, useEffect, FormEvent } from 'react';
import { IFriend } from '@/api/community/Friend.Interface';
import { searchFriend } from '@/api/community/FriendApi';

const SearchFriends = () => {
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [keyword, setKeyword] = useState('');

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await searchFriend({ keyword: keyword });
      console.log(response);
      setFriends(response.data.body.searchResult.content);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col gap-6 dt:w-[25.6875rem] mb:w-full items-center ">
      <h2 className="text-[1.625rem] text-Light_CategoryText_Icon_Contents">친구 ID 검색</h2>
      <form className="w-full" onSubmit={handleFormSubmit}>
        <input
          className="w-full text-center h-8 bg-Dark_Text_Contents text-Light_CategoryText_Icon_Contents placeholder:text-Light_CategoryText_Icon_Contents rounded-[0.625rem]"
          placeholder="친구 닉네임을 입력해주세요."
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </form>
      <div className="w-full mb:h-full mb:w-full h-[24.1875rem] rounded-[1.875rem] dt:bg-Light_Layout-400 mb:bg-Light_Layout-200 flex flex-col items-center px-8 py-[1.1875rem] gap-4 overflow-y-auto scrollbar-hide dark:bg-Dark_Layout-400">
        {friends.map((friend) => (
          <FriendItem key={friend.memberId} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default SearchFriends;
