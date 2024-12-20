type FriendlModalProps = {
  nickname?: string;
  messages?: string[];
  onClose: () => void;
  onClick: () => void;
  title: string;
  btnText: string;
};

const FriendModal = ({ onClose, onClick, title, btnText, nickname, messages }: FriendlModalProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-Dark_Layout-100 bg-opacity-60" onClick={onClose} />
      <div className="absolute flex flex-col items-center gap-5  p-9 bg-Light_Layout-400 border-none  text-Light_Text_Name top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <p>
          <span className="text-Button text-lg">{nickname}</span>
          <span className="text-base">{title}</span>
        </p>
        {messages && (
          <div className="flex flex-col gap-2">
            {messages.map((message) => (
              <li key={message} className="text-xs">
                {message}
              </li>
            ))}
          </div>
        )}
        <div className="flex gap-3 w-full">
          <button
            onClick={onClick}
            className="w-full h-9 bg-Light_Layout-100 text-Light_Text_AboutMe text-base rounded-[2rem] "
          >
            {btnText}
          </button>

          <button onClick={onClose} className="w-full h-9 bg-Button text-Light_Layout-400 text-base rounded-[2rem] ">
            취소
          </button>
        </div>
      </div>
    </>
  );
};

export default FriendModal;
