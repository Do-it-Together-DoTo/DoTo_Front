import { create } from 'zustand';

interface NotificationState {
  isNotification: boolean;
  setIsNotification: () => void;
}

const useNotificationStore = create<NotificationState>((set) => ({
  isNotification: true,
  setIsNotification: () => {
    set((state) => ({ isNotification: !state.isNotification }));
  },
}));

export default useNotificationStore;
