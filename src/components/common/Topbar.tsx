import { SunIcon } from '@/assets/svg';
import { MoonIcon } from '@/assets/svg';
import { NotificationOnIcon } from '@/assets/svg';
import { NotificationOffIcon } from '@/assets/svg';
import { useState } from 'react';

const Topbar = () => {
  //알람이랑 다크모드는 전역상태로 관리해야할 것 같은데
  const [isNotification, setIsNotification] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleAlarmClick = () => {
    setIsNotification(!isNotification);
    //TODO: 알람 전체 상태 관리 필요
  };
  const handleDarkModeClick = () => {
    //TODO: 다크모드도 전체상태 관리로 다루기 + 다크모드 색상
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex justify-end px-2 h-16 items-center ">
      <div className="flex gap-3 sm:gap-14">
        <label className="inline-flex items-center cursor-pointer">
          <div className="relative w-12 h-6 bg-Light_Layout-100 rounded-2xl ">
            <input type="checkbox" value="" className="sr-only peer" onClick={handleDarkModeClick} />
            <div className="peer-checked:-translate-x-[calc(100%+2px)]  absolute top-[2px] right-[2px] bg-Light_Layout-300 rounded-full h-5 w-5 transition-all"></div>
            <div className="absolute top-[4px] left-[7px] peer-checked:left-[calc(100%-22px)]">
              {isDarkMode ? <MoonIcon width="15" height="15" /> : <SunIcon width="15" height="15" />}
            </div>
          </div>
        </label>
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
