import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './CustomCalendar.css';
import { PrevLabel, NextLabel } from '@assets/svg/home/calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const addContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month' && date.getMonth() === selectedMonth) {
      return <div className="w-8 h-8 rounded-md bg-Light_Layout-300"></div>;
    }
  };

  const disableNeighboringMonth = ({ date, view }: { date: Date; view: string }) => {
    return view === 'month' && date.getMonth() !== selectedMonth;
  };

  return (
    <Calendar
      onChange={onChange}
      value={value}
      minDetail="month"
      next2Label={null}
      prev2Label={null}
      nextLabel={<NextLabel />}
      prevLabel={<PrevLabel />}
      locale="ko"
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
