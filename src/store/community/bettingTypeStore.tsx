import { create } from 'zustand';

interface BettingTypeState {
  bettingTypeList: { [key: number]: string };
  setBettingTypeList: (bettingId: number, type: string) => void;
}

const useBettingTypeStore = create<BettingTypeState>((set) => ({
  bettingTypeList: {},
  setBettingTypeList: (bettingId, type) => {
    set((state) => ({
      bettingTypeList: {
        ...state.bettingTypeList,
        [bettingId]: type,
      },
    }));
  },
}));

export default useBettingTypeStore;
