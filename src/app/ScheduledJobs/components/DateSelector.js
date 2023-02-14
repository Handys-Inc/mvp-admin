import { useState } from 'react';
import { format, eachDayOfInterval, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';
import Popover from '@mui/material/Popover';

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

  const handleDateChange = (day, month, year) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
  };

  const renderPopoverContent = () => {
    const startDate = startOfYear(selectedDate);
    const endDate = endOfYear(selectedDate);
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    return (
      <ul className="list-disc pl-8">
        {days.map((day) => (
          <li key={day.toISOString()}>{format(day, 'MMMM d, yyyy')}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex items-center justify-center w-min h-16 border-2 border-mute shadow-md rounded-full">
        <select
            //value={selectedFilter}
            onChange={(day) => handleDateChange(day, selectedDate.getMonth(), selectedDate.getFullYear())}>
                <option>Day</option>
                {days.map((day) => (
                    <option key={day} value={day}> {day}</option>
                ))}
        </select>
        <select
             //value={selectedFilter}
             onChange={(month) => handleDateChange(selectedDate.getDate(), month, selectedDate.getFullYear())}>
                <option>Month</option>
                {months.map((month) => (
                    <option key={month} value={month}> {month}</option>
                ))}
        </select>
        <select
             //value={selectedFilter}
             onChange={(year) => handleDateChange(selectedDate.getDate(), selectedDate.getMonth(), year)}>
                <option>Year</option>
                {years.map((month) => (
                    <option key={month} value={month}> {month}</option>
                ))}
        </select>
      {/* <Dropdown label="Select day" options={days} onChange={(day) => handleDateChange(day, selectedDate.getMonth(), selectedDate.getFullYear())} />
      <Dropdown label="Select month" options={months} onChange={(month) => handleDateChange(selectedDate.getDate(), month, selectedDate.getFullYear())} />
      <Dropdown label="Select year" options={years} onChange={(year) => handleDateChange(selectedDate.getDate(), selectedDate.getMonth(), year)} /> */}
      {/* <Popover content={renderPopoverContent()}>
        <div className="ml-4 rounded-full h-8 w-8 flex items-center justify-center bg-blue-500 text-white">
          {format(selectedDate, 'd')}
        </div>
      </Popover> */}
    </div>
  );
}

export default DateSelector;
