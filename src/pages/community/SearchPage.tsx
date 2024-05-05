import FriendItem from '@/components/community/search/FriendItem';

const SearchPage = () => {
  return (
    <div className="w-screen h-screen bg-Dark_Text_Contents dark:bg-Dark_Layout-300 flex justify-center ">
      <div className="flex flex-col gap-6 w-[25.6875rem] items-center mt-[4.6875rem]">
        <h2 className="text-[1.625rem] text-Dark_Text_Name">친구 ID 검색</h2>
        <input
          className="w-full text-center h-8 bg-Dark_Text_AboutMe text-Dark_Text_Name placeholder:text-Dark_Text_Contents rounded-[0.625rem]"
          placeholder="친구 닉네임을 입력해주세요."
        />
        <div className="w-[25.6875rem] h-[24.1875rem] rounded-[1.875rem] bg-Light_Layout-400 flex flex-col items-center px-8 py-[1.1875rem] gap-4 overflow-scroll">
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
