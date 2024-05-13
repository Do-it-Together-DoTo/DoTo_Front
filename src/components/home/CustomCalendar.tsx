import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const addContent = () => {
    return <div className="w-8 h-8 rounded-md bg-Light_Layout-100"></div>;
  };

  return (
    <div className="flex items-center justify-center">
      <Calendar
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
        locale="ko"
        showNeighboringMonth={false}
        formatDay={(_locale, date) => moment(date).format('D')}
        tileContent={addContent}
      />
    </div>
  );
};

export default CustomCalendar;
