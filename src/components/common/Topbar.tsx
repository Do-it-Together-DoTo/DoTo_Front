import { SunIcon, MoonIcon, NotificationOnIcon, NotificationOffIcon } from '@/assets/svg';
import useDarkModeStore from '@/store/darkmodeStore';
import useNotificationStore from '@/store/notificationStore';

const Topbar = () => {
  const { isNotification, setIsNotification } = useNotificationStore();
  const { isDarkMode, setIsDarkMode } = useDarkModeStore();
  const handleAlarmClick = () => {
    setIsNotification();
  };
  const handleDarkModeClick = () => {
    setIsDarkMode();
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <div className="flex justify-end px-[1.59375rem] h-[3.1875rem] items-center dark:bg-Dark_Layout-100">
      <div className="flex gap-3 w-[5.0625rem]">
        {isDarkMode ? (
          <div
            className="relative w-[3.125rem] h-[1.375rem] bg-Dark_Layout-400 rounded-2xl"
            onClick={handleDarkModeClick}
          >
            <div className="flex">
              <div className=" -translate-x-[1.7rem] absolute top-[0.125rem] right-[0.125rem] bg-Light_Layout-100 rounded-full h-[1.125rem] w-[1.125rem] duration-500" />
              <div className="absolute top-[0.1875rem] right-[0.4375rem]">
                <MoonIcon width="16" height="16" />
              </div>
            </div>
          </div>
        ) : (
          <div
            className="relative w-[3.125rem] h-[1.375rem] bg-Light_Layout-100 rounded-2xl"
            onClick={handleDarkModeClick}
          >
            <div className="flex">
              <div className="absolute top-[0.1875rem] left-[0.4375rem]">
                <SunIcon width="15" height="15" />
              </div>
              <div className="translate-x-[1.7rem] absolute top-[0.125rem] left-[0.125rem] bg-Light_Layout-300 rounded-full h-[1.125rem] w-[1.125rem] duration-500" />
            </div>
          </div>
        )}

        <div onClick={handleAlarmClick} className="flex items-center">
          {isNotification ? (
            <NotificationOnIcon width="19" height="19" />
          ) : (
            <NotificationOffIcon width="19" height="19" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
