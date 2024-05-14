import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './CustomCalendar.css';
import { PrevLabel, NextLabel } from '@assets/svg/home/calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const addContent = () => {
    return <div className="w-8 h-8 rounded-md bg-Light_Layout-400"></div>;
  };

  return (
    <Calendar
      onChange={onChange}
      value={value}
      next2Label={null}
      prev2Label={null}
      nextLabel={<NextLabel />}
      prevLabel={<PrevLabel />}
      locale="ko"
      showNeighboringMonth={false}
      formatDay={(_locale, date) => moment(date).format('D')}
      tileContent={addContent}
    />
  );
};

export default CustomCalendar;
