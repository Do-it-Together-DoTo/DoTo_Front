import { SunIcon } from '@/assets/svg';
import { MoonIcon } from '@/assets/svg';
import { NotificationOnIcon } from '@/assets/svg';
import { NotificationOffIcon } from '@/assets/svg';
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
    console.log(isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <div className="flex justify-end px-2 h-16 items-center dark:bg-Dark_Layout-100">
      <div className="flex gap-3">
        {isDarkMode ? (
          <div className="relative w-12 h-6 bg-Dark_Layout-400 rounded-2xl" onClick={handleDarkModeClick}>
            <div className="flex">
              <div className="-translate-x-full absolute top-[2px] right-[4px] bg-Light_Layout-100 rounded-full h-5 w-5 duration-300" />
              <div className="absolute top-[4px] right-[5px]">
                <MoonIcon width="15" height="15" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-12 h-6 bg-Light_Layout-100 rounded-2xl" onClick={handleDarkModeClick}>
            <div className="flex">
              <div className="absolute top-[4px] left-[5px]">
                <SunIcon width="15" height="15" />
              </div>
              <div className="translate-x-full absolute top-[2px] left-[5px] bg-Light_Layout-300 rounded-full h-5 w-5 duration-300" />
            </div>
          </div>
        )}

        <div onClick={handleAlarmClick}>
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
