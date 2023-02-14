import { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isWeekend } from 'date-fns';
import Popover from '@mui/material/Popover';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return (
      <div className="grid grid-cols-7 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-bold text-sm py-2">{day}</div>
        ))}
      </div>
    );
  };

  const renderCalendarDays = () => {
    const monthStart = startOfMonth(selectedDate);
    const monthEnd = endOfMonth(selectedDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    return (
      <div className="grid grid-cols-7 grid-rows-6">
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className={`py-3 h-28 border-2 border-faintGray text-center ${isWeekend(day) ? 'bg-gray-200' : ''}`}
            onClick={() => console.log(`Activities for ${format(day, 'MM/dd/yyyy')}`)}
          >
            {/* {isSameMonth(day, selectedDate) && (
              <Popover content={`Activities for ${format(day, 'MM/dd/yyyy')}`}>
                <div className={`rounded-full h-6 w-6 ${isSameMonth(day, selectedDate) ? 'text-black' : 'text-gray-400'}`}>
                  {format(day, 'd')}
                </div>
              </Popover>
            )} */}
            {format(day, 'd')}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-4/4">
      <div className="my-4">
        {renderDaysOfWeek()}
        {renderCalendarDays()}
      </div>
    </div>
  );
}

export default Calendar;
