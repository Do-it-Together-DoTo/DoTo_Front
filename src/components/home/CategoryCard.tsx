import { Droppable, Draggable } from 'react-beautiful-dnd';
import {
  PublicIcon,
  FriendOnlyIcon,
  PrivateIcon,
  CreateTodoIcon,
  CheckIcon,
  TodoEditModalIcon,
} from '@/assets/svg/home/category';
import useModal from '@/hooks/useModal';
import TodoEditModal from '@/modal/home/TodoEditModal';
import { useState } from 'react';

interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

interface Category {
  id: string;
  shared: string;
  title: string;
  color: string;
}

const CategoryCard = ({ category, todoList }: { category: Category; todoList: Todo[] }) => {
  const { Modal, open, close } = useModal();

  const [selectedTodo, setSelectedTodo] = useState({ title: '', category: '', color: '', shared: '' });

  return (
    <div>
      {/* Category */}
      <section className="flex">
        <div
          className={`flex border border-${category.color} w-fit py-1.5 px-2.5 rounded-md mr-1 bg-${category.color} bg-opacity-15`}
        >
          {category.shared === 'public' ? (
            <PublicIcon className={`w-[0.875rem] fill-${category.color}`} />
          ) : category.shared === 'friendOnly' ? (
            <FriendOnlyIcon className={`w-[0.875rem] fill-${category.color}`} />
          ) : (
            <PrivateIcon className={`w-[0.875rem] fill-${category.color}`} />
          )}
          <span className={`text-xs text-${category.color} font-medium ml-1.5`}>{category.title}</span>
        </div>
        <CreateTodoIcon width={`1.125rem`} className="dark:fill-Dark_Text_Contents" />
      </section>
      {/* TodoList */}
      <Droppable droppableId={category.id} direction="vertical">
        {(provided) => (
          <section ref={provided.innerRef} {...provided.droppableProps} className="mb-6">
            {todoList.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <div
                    onClick={() => {
                      open();
                      setSelectedTodo({
                        title: todo.title,
                        category: category.title,
                        color: category.color,
                        shared: category.shared,
                      });
                    }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
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
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
      <Modal>
        <TodoEditModal onClose={close} selectedTodo={selectedTodo} />
      </Modal>
    </div>
  );
};

export default CategoryCard;
