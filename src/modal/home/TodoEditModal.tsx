interface TodoEditModalProps {
  onClose: () => void;
  selectedTodo: { title: string; category: string; color: string };
}

const TodoEditModal = ({ onClose, selectedTodo }: TodoEditModalProps) => {
  return (
    <div>
      <p className="bg-pink">
        {selectedTodo.title} {selectedTodo.category}
        {selectedTodo.color}
      </p>
      <button onClick={onClose}>버튼쓰</button>
    </div>
  );
};

export default TodoEditModal;
