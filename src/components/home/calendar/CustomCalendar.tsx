import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './CustomCalendar.css';
import useDarkModeStore from '@/store/darkmodeStore';
import { PrevLabel, NextLabel } from '@assets/svg/home/calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  const addContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month' && date.getMonth() === selectedMonth) {
      return <div className="w-8 h-8 rounded-md bg-Light_Layout-300 dark:bg-Light_Text_AboutMe"></div>;
    }
  };

  const disableNeighboringMonth = ({ date, view }: { date: Date; view: string }) => {
    return view === 'month' && date.getMonth() !== selectedMonth;
  };

  return (
    <Calendar
      className={isDarkMode ? 'dark' : ''}
      locale="ko"
      onChange={onChange}
      value={value}
      minDetail="month"
      next2Label={null}
      prev2Label={null}
      nextLabel={<NextLabel {...(isDarkMode ? { fill: '#F2F2F2' } : {})} />}
      prevLabel={<PrevLabel {...(isDarkMode ? { fill: '#F2F2F2' } : {})} />}
      formatDay={(_locale, date) => moment(date).format('D')}
      onActiveStartDateChange={({ activeStartDate }) => {
        if (activeStartDate) {
          setSelectedMonth(activeStartDate.getMonth());
        }
      }}
      tileContent={addContent}
      tileDisabled={disableNeighboringMonth}
    />
  );
};

export default CustomCalendar;
