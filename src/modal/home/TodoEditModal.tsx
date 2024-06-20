import { OnCloseIcon, TodoEditIcon, TodoDelIcon, ChangeDateIcon, RepeatIcon } from '@/assets/svg/home/modal';
import { PublicIcon, FriendOnlyIcon, PrivateIcon } from '@/assets/svg/home/category';

interface TodoEditModalProps {
  onClose: () => void;
  selectedTodo: { title: string; category: string; color: string; shared: string };
}

const TodoEditModal = ({ onClose, selectedTodo }: TodoEditModalProps) => {
  return (
    <div className="relative w-[24.625rem] h-full rounded-2xl bg-Light_Layout-200 flex flex-col p-7 items-center dark:bg-Dark_Layout-300">
      <button onClick={onClose}>
        <OnCloseIcon className="absolute right-0 w-3 mr-7 dark:fill-Dark_Text_Contents" />
      </button>
      <p className="mb-4 font-medium text-left mt-9 text-Light_Text_Name dark:text-Dark_Text_Name">
        {selectedTodo.title}
      </p>
      <div
        className={`border-${selectedTodo.color} border px-2.5 py-1 rounded-md flex bg-${selectedTodo.color} bg-opacity-15`}
      >
        {selectedTodo.shared === 'public' ? (
          <PublicIcon className={`w-[0.875rem] fill-${selectedTodo.color}`} />
        ) : selectedTodo.shared === 'friendOnly' ? (
          <FriendOnlyIcon className={`w-[0.875rem] fill-${selectedTodo.color}`} />
        ) : (
          <PrivateIcon className={`w-[0.875rem] fill-${selectedTodo.color}`} />
        )}
        <p className={`ml-0.5 text-xs font-medium text-${selectedTodo.color}`}>{selectedTodo.category}</p>
      </div>
      <div className="flex flex-col my-8">
        <div className="flex">
          <button className="w-40 h-24 rounded-xl bg-Light_Layout-300 text-Light_CategoryText_Icon_Contents dark:bg-Dark_Layout-400">
            <div className="flex flex-col items-center justify-center h-full transition-all hover:scale-110">
              <TodoEditIcon className="w-7 dark:fill-Dark_Text_Contents" />
              <span className="mt-1 text-sm font-medium dark:text-Dark_Text_Contents">todo 수정</span>
            </div>
          </button>
          <button className="w-40 h-24 ml-3 rounded-xl bg-Light_Layout-300 text-Light_CategoryText_Icon_Contents dark:bg-Dark_Layout-400">
            <div className="flex flex-col items-center justify-center h-full transition-all hover:scale-110">
              <TodoDelIcon className="w-5 dark:fill-Dark_Text_Contents" />
              <span className="mt-1 text-sm font-medium dark:text-Dark_Text_Contents">todo 삭제</span>
            </div>
          </button>
        </div>
        <div className="flex mt-3">
          <button className="w-40 h-24 rounded-xl bg-Light_Layout-300 text-Light_CategoryText_Icon_Contents dark:bg-Dark_Layout-400">
            <div className="flex flex-col items-center justify-center h-full transition-all hover:scale-110">
              <ChangeDateIcon className="w-7 dark:fill-Dark_Text_Contents" />
              <span className="mt-1 text-sm font-medium dark:text-Dark_Text_Contents">날짜 바꾸기</span>
            </div>
          </button>
          <button className="w-40 h-24 ml-3 rounded-xl bg-Light_Layout-300 text-Light_CategoryText_Icon_Contents dark:bg-Dark_Layout-400">
            <div className="flex flex-col items-center justify-center h-full transition-all hover:scale-110">
              <RepeatIcon className="w-6 dark:fill-Dark_Text_Contents" />
              <span className="mt-1 text-sm font-medium dark:text-Dark_Text_Contents">다시하기</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoEditModal;
