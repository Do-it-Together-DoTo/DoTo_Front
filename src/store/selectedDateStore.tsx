import { create } from 'zustand';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface SelectedDateProps {
  selectedDate: Value;
  setSelectedDate: (value: Value) => void;
}

const useSelectedDateState = create<SelectedDateProps>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (selectedDate: Value) => set({ selectedDate }),
}));

export default useSelectedDateState;
