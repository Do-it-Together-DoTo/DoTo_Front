interface FriendlModalProps {
  type: 'block' | 'delete';
}

const FriendModal = ({ type }: FriendlModalProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-Dark_Layout-100 bg-opacity-60" />
      <div className="absolute flex flex-col items-center gap-5  p-9 bg-Light_Layout-400 border-none  text-Light_Text_Name top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <p>
          <span className="text-Button text-lg">닉네임 뭐하지</span>
          <span className="text-base">
            {type === 'block' ? '님을 차단하시겠습니까?' : type === 'delete' && '님을 삭제하시겠습니까?'}
          </span>
        </p>
        {type === 'block' && (
          <div className="flex flex-col gap-2">
            <li className="text-xs">차단된 사람은 회원님의 프로필을 찾을 수 없습니다.</li>
            <li className="text-xs">마이페이지에서 언제든지 차단을 해제할 수 있습니다.</li>
          </div>
        )}
        <div className="flex gap-3 w-full">
          {type === 'block' && (
            <button className="w-full h-9 bg-Light_Layout-100 text-Light_Text_AboutMe text-base rounded-[2rem] ">
              차단
            </button>
          )}
          {type === 'delete' && (
            <button className="w-full h-9 bg-Light_Layout-100 text-Light_Text_AboutMe text-base rounded-[2rem] ">
              삭제
            </button>
          )}
          <button className="w-full h-9 bg-Button text-Light_Layout-400 text-base rounded-[2rem] ">취소</button>
        </div>
      </div>
    </>
  );
};

export default FriendModal;
