import { TimerIcon } from '@/assets/svg/community';
import dayjs from 'dayjs';
import 'dayjs/plugin/objectSupport';

const Timer = () => {
  // TODO: 타이머 기능 만들어야함.`
  const now = dayjs();
  const resetTime = dayjs().endOf('D');

  console.log(resetTime.diff(now, 'hour'));

  return (
    <section className="flex gap-4 items-center py-4">
      <TimerIcon width={17} height={20} />
      <div className="flex gap-1">
        <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">0</p>
        <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">0</p>
        <p className="text-Light_Text_AboutMe">일</p>
      </div>
      <div className="flex gap-1">
        <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">2</p>
        <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">3</p>
        <p className="text-Light_Text_AboutMe">시</p>
      </div>
      <div className="flex gap-1">
        <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">0</p>
        <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">8</p>
        <p className="text-Light_Text_AboutMe">분</p>
      </div>
      <div className="flex gap-1">
        <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">4</p>
        <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">1</p>
        <p className="text-Light_Text_AboutMe">초</p>
      </div>
    </section>
  );
};

export default Timer;
