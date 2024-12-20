import { create } from 'zustand';

type DarkModeState = {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
};

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  setIsDarkMode: () => {
    set((state) => ({ isDarkMode: !state.isDarkMode }));
  },
}));

export default useDarkModeStore;
