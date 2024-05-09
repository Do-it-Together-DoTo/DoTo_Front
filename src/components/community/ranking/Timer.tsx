import { TimerIcon } from '@/assets/svg/community';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import { useEffect, useState } from 'react';

const Timer = () => {
  const [restSec, setRestSec] = useState(dayjs.duration(dayjs().endOf('D').diff(dayjs())));

  // TODO: 타이머 로직 보완 필요: useInterval 사용
  useEffect(() => {
    console.log(restSec);
    const id = setInterval(() => {
      setRestSec(dayjs.duration(dayjs().endOf('D').diff(dayjs())));
    }, 1000);
  }, []);

  return (
    <section className="flex gap-4 items-center py-4">
      <TimerIcon width={17} height={20} />
      {restSec
        .format('DD/HH/mm/ss')
        .split('/')
        .map((time, idx) => (
          <div className="flex gap-1" key={time + idx}>
            <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">{time[0]}</p>
            <p className="text-center w-5 h-6 rounded-md bg-Light_Layout-300 text-Light_Text_AboutMe">{time[1]}</p>
            <p className="text-Light_Text_AboutMe">{idx == 0 ? '일' : idx == 1 ? '시' : idx === 2 ? '분' : '초'}</p>
          </div>
        ))}
    </section>
  );
};

export default Timer;
