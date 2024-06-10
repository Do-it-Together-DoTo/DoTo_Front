import {
  PublicIcon,
  FriendOnlyIcon,
  PrivateIcon,
  CreateTodoIcon,
  CheckIcon,
  TodoEditModalIcon,
} from '@/assets/svg/home/category';

interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

interface Category {
  shared: string;
  title: string;
  color: string;
}

const CategoryCard = ({ category, todoList }: { category: Category; todoList: Todo[] }) => {
  return (
    <div>
      {/* Category */}
      <section className="flex">
        <div className={`flex bg-${category.color} w-fit py-1.5 px-2.5 rounded-md mr-1`}>
          {category.shared === 'public' ? (
            <PublicIcon width={`0.875rem`} />
          ) : category.shared === 'friendOnly' ? (
            <FriendOnlyIcon width={`0.875rem`} />
          ) : (
            <PrivateIcon width={`0.875rem`} />
          )}
          <span className="text-xs text-Light_Layout-400 ml-1.5">{category.title}</span>
        </div>
        <CreateTodoIcon width={`1.125rem`} className="dark:fill-Dark_Text_Contents" />
      </section>
      {/* TodoList */}
      <section className="mb-6">
        {todoList.map((todo) => (
          <div
            key={todo.id}
            className="flex bg-Light_Layout-400 my-2.5 py-3 rounded-xl items-center relative dark:bg-Dark_Layout-400"
          >
            {todo.isDone ? (
              <>
                <div
                  className={`flex items-center justify-center w-3 h-3 rounded-full mx-2.5 bg-${category.color} absolute left-0`}
                >
                  <CheckIcon width={`0.375rem`} />
                </div>
                <p className="pr-[2.625rem] pl-8 text-xs text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
                  {todo.title}
                </p>
              </>
            ) : (
              <>
                <div
                  className={`w-3 h-3 rounded-full mx-2.5 border-${category.color} border-[0.0625rem] absolute left-0`}
                />
                <p className="pr-[2.625rem] pl-8 text-xs text-Dark_CategoryText_Icon dark:text-Light_Layout-400">
                  {todo.title}
                </p>
              </>
            )}
            <TodoEditModalIcon
              width={`1.125rem`}
              style={{ margin: '0 0.75rem', position: 'absolute', right: 0 }}
              className="dark:fill-Dark_Text_Contents"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default CategoryCard;
