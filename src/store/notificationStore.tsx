import { create } from 'zustand';

type NotificationState = {
  isNotification: boolean;
  setIsNotification: () => void;
};

const useNotificationStore = create<NotificationState>((set) => ({
  isNotification: true,
  setIsNotification: () => {
    set((state) => ({ isNotification: !state.isNotification }));
  },
}));

export default useNotificationStore;
