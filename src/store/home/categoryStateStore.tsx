import { create } from 'zustand';

interface categoryProps {
  id: number;
  contents: string;
  scope: string;
  isActivated: boolean;
  color: string;
  seq: number;
}

interface CategoryStateProps {
  refresh: number;
  changeRefresh: () => void;
  activated: categoryProps[];
  setActivated: (list: categoryProps[]) => void;
  inActivated: categoryProps[];
  setInActivated: (list: categoryProps[]) => void;
  filterActivated: (id: number) => void;
  filterInActivated: (id: number) => void;
}

const useCategoryState = create<CategoryStateProps>((set) => ({
  refresh: 1,
  changeRefresh: () => set((state) => ({ refresh: state.refresh * -1 })),

  activated: [],
  inActivated: [],

  setActivated: (list: categoryProps[]) => set(() => ({ activated: list })),
  setInActivated: (list: categoryProps[]) => set(() => ({ inActivated: list })),

  filterActivated: (id: number) => set((state) => ({ activated: state.activated.filter((item) => item.id !== id) })),
  filterInActivated: (id: number) =>
    set((state) => ({ inActivated: state.inActivated.filter((item) => item.id !== id) })),
}));

export default useCategoryState;
