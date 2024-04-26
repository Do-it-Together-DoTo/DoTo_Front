import { SunIcon } from '@/assets/svg';
import { MoonIcon } from '@/assets/svg';
import { NotificationOnIcon } from '@/assets/svg';
import { NotificationOffIcon } from '@/assets/svg';

const Topbar = () => {
  return (
    <div className="flex justify-end px-2 h-16 items-center">
      <div className="flex gap-3">
        {/* TODO: 다크모드 토글 구현 */}
        <SunIcon width="15" height="15" />
        <MoonIcon width="15" height="15" />
        {/* TODO: 알림버튼 구현 */}
        <NotificationOnIcon width="19" height="19" />
        <NotificationOffIcon width="19" height="19" />
      </div>
    </div>
  );
};

export default Topbar;
