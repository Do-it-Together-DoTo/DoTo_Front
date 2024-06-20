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
      <p className="mt-7 mb-2.5 font-medium text-Light_Text_Name text-left dark:text-Dark_Text_Name">
        {selectedTodo.title}
      </p>
      <div className={`bg-${selectedTodo.color} px-2.5 py-1 rounded-md flex`}>
        {selectedTodo.shared === 'public' ? (
          <PublicIcon width={`0.8rem`} />
        ) : selectedTodo.shared === 'friendOnly' ? (
          <FriendOnlyIcon width={`0.8rem`} />
        ) : (
          <PrivateIcon width={`0.8rem`} />
        )}
        <p className="ml-0.5 text-xs text-Light_Layout-400">{selectedTodo.category}</p>
      </div>
      <div className="flex flex-col my-8">
        <div className="flex">
          <button className="flex flex-col items-center justify-center w-40 h-24 px-10 py-4 rounded-xl bg-Light_Layout-300 text-Light_CategoryText_Icon_Contents dark:bg-Dark_Layout-400">
            <TodoEditIcon className="w-7 dark:fill-Dark_Text_Contents" />
            <span className="mt-1 text-sm font-medium dark:text-Dark_Text_Contents">todo 수정</span>
          </button>
          <button className="flex flex-col items-center justify-center w-40 h-24 px-10 py-4 ml-3 rounded-xl bg-Light_Layout-300 text-Light_CategoryText_Icon_Contents dark:bg-Dark_Layout-400">
            <TodoDelIcon className="w-5 dark:fill-Dark_Text_Contents" />
            <span className="mt-1 text-sm font-medium dark:text-Dark_Text_Contents">todo 삭제</span>
          </button>
        </div>
        <div className="flex mt-3">
          <button className="flex flex-col items-center justify-center w-40 h-24 px-10 py-4 rounded-xl bg-Light_Layout-300 text-Light_CategoryText_Icon_Contents dark:bg-Dark_Layout-400">
            <ChangeDateIcon className="w-7 dark:fill-Dark_Text_Contents" />
            <span className="mt-1 text-sm font-medium dark:text-Dark_Text_Contents">날짜 바꾸기</span>
          </button>
          <button className="flex flex-col items-center justify-center w-40 h-24 px-10 py-4 ml-3 rounded-xl bg-Light_Layout-300 text-Light_CategoryText_Icon_Contents dark:bg-Dark_Layout-400">
            <RepeatIcon className="w-6 dark:fill-Dark_Text_Contents" />
            <span className="mt-1 text-sm font-medium dark:text-Dark_Text_Contents">다시하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoEditModal;
