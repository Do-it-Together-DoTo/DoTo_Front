import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DarkModeState {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
}

const useDarkModeStore = create(
  persist<DarkModeState>(
    (set) => ({
      isDarkMode: true,
      setIsDarkMode: () => {
        set((state) => ({ isDarkMode: !state.isDarkMode }));
      },
    }),
    { name: 'dark-storage' },
  ),
);

export default useDarkModeStore;
