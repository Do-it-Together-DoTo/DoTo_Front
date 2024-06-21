import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import useDarkModeStore from '@/store/darkmodeStore';
// import useSelectedDateState from '@/store/selectedDateStore';

const CustomModalCalendar = () => {
  //   const { selectedDate, setSelectedDate } = useSelectedDateState();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

  const disableNeighboringMonth = ({ date, view }: { date: Date; view: string }) => {
    return view === 'month' && date.getMonth() !== selectedMonth;
  };

  return (
    <Calendar
      className={isDarkMode ? 'modalDark' : 'modal'}
      locale="ko"
      //   onChange={setSelectedDate}
      //   value={selectedDate}
      minDetail="month"
      next2Label={null}
      prev2Label={null}
      formatDay={(_locale, date) => moment(date).format('D')}
      onActiveStartDateChange={({ activeStartDate }) => {
        if (activeStartDate) {
          setSelectedMonth(activeStartDate.getMonth());
        }
      }}
      tileDisabled={disableNeighboringMonth}
      showNeighboringMonth={false}
    />
  );
};

export default CustomModalCalendar;
