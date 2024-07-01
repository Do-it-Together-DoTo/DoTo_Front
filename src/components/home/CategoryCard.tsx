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
import { instance } from '@/api/axios';

interface TodoProps {
  id: number;
  contents: string;
  isDone: boolean;
}

interface CategoryCardProps {
  memberId: number | null;
  id: number;
  color: string;
  title: string;
  scope: string;
  todoList: TodoProps[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ memberId, id, color, title, scope, todoList }) => {
  const { Modal, open, close } = useModal();

  const [selectedTodo, setSelectedTodo] = useState({ title: '', category: '', color: '', shared: '' });

  const handleIsDoneButton = (todo: TodoProps) => {
    instance.patch(`/todo/check/${todo.id}`);
  };

  return (
    <div>
      {memberId === null ? (
        <>
          {/* Category */}
          <section className="flex">
            <div
              className={`flex border border-${color.toLowerCase()} w-fit py-1.5 px-2.5 rounded-md mr-1 bg-${color.toLowerCase()} bg-opacity-15`}
            >
              {/* 나중에 공개여부 받는걸로 변경 */}
              {scope === 'PUBLIC' ? (
                <PublicIcon className={`w-[0.875rem] fill-${color.toLowerCase()}`} />
              ) : scope === 'FRIENDS' ? (
                <FriendOnlyIcon className={`w-[0.875rem] fill-${color.toLowerCase()}`} />
              ) : (
                <PrivateIcon className={`w-[0.875rem] fill-${color.toLowerCase()}`} />
              )}
              <span className={`text-xs text-${color.toLowerCase()} font-medium ml-1.5`}>{title}</span>
            </div>
            <CreateTodoIcon width={`1.125rem`} className="dark:fill-Dark_Text_Contents" />
          </section>
          {/* TodoList */}
          <Droppable droppableId={String(id)} direction="vertical">
            {(provided) => (
              <section ref={provided.innerRef} {...provided.droppableProps} className="mb-6">
                {todoList.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                    {(provided) => (
                      <div
                        onClick={() => {
                          open();
                          setSelectedTodo({
                            title: todo.contents,
                            category: title,
                            color: color.toLowerCase(),
                            shared: 'public',
                          });
                        }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{ ...provided.draggableProps.style, cursor: 'pointer' }}
                        className="flex bg-Light_Layout-400 my-2.5 py-3 rounded-xl items-center relative dark:bg-Dark_Layout-200"
                      >
                        {todo.isDone ? (
                          <>
                            <div
                              onClick={() => handleIsDoneButton(todo)}
                              className={`flex items-center justify-center w-3 h-3 rounded-full mx-2 cursor-pointer bg-${color.toLowerCase()} absolute left-0`}
                            >
                              <CheckIcon width={`0.375rem`} />
                            </div>
                            <p className="pr-[2.625rem] pl-8 text-xs text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
                              {todo.contents}
                            </p>
                          </>
                        ) : (
                          <>
                            <div
                              onClick={() => handleIsDoneButton(todo)}
                              className={`w-3 h-3 rounded-full mx-2.5 border-${color.toLowerCase()} cursor-pointer border-[0.0625rem] absolute left-0`}
                            />
                            <p className="pr-[2.625rem] pl-8 text-xs text-Dark_CategoryText_Icon dark:text-Light_Layout-400">
                              {todo.contents}
                            </p>
                          </>
                        )}
                        <TodoEditModalIcon
                          width={`1.125rem`}
                          style={{ margin: '0 0.75rem', position: 'absolute', right: 0 }}
                          className="cursor-pointer dark:fill-Dark_Text_Contents"
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
        </>
      ) : (
        <>
          {/* Category */}
          <section className="flex">
            <div
              className={`flex border border-${color.toLowerCase()} w-fit py-1.5 px-2.5 rounded-md mr-1 bg-${color.toLowerCase()} bg-opacity-15`}
            >
              <span className={`text-xs text-${color.toLowerCase()} font-medium`}>{title}</span>
            </div>
          </section>
          {/* TodoList */}
          <section className="mb-6">
            {todoList.map((todo) => (
              <div className="flex bg-Light_Layout-400 my-2.5 py-3 rounded-xl items-center relative dark:bg-Dark_Layout-200">
                {todo.isDone ? (
                  <>
                    <div
                      className={`flex items-center justify-center w-3 h-3 rounded-full mx-2 cursor-pointer bg-${color.toLowerCase()} absolute left-0`}
                    >
                      <CheckIcon width={`0.375rem`} />
                    </div>
                    <p className="pr-[2.625rem] pl-8 text-xs text-Light_CategoryText_Icon_Contents dark:text-Dark_CategoryText_Icon">
                      {todo.contents}
                    </p>
                  </>
                ) : (
                  <>
                    <div
                      className={`w-3 h-3 rounded-full mx-2.5 border-${color.toLowerCase()} cursor-pointer border-[0.0625rem] absolute left-0`}
                    />
                    <p className="pr-[2.625rem] pl-8 text-xs text-Dark_CategoryText_Icon dark:text-Light_Layout-400">
                      {todo.contents}
                    </p>
                  </>
                )}
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default CategoryCard;
