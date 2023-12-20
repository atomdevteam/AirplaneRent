import React, { useState, useEffect } from 'react';

const Calander = () => {
  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);
  const [numberOfDaysPrevMonth, setNumberOfDaysPrevMonth] = useState(0);

  useEffect(() => {
    initDate();
  }, [])


  useEffect(() => {

    getNoOfDays();
    getFirstDayOfMonth();
    const prevMonth = month === 0 ? 11 : month - 1; // El mes anterior al actual
    const prevYear = prevMonth === 11 ? year - 1 : year; // El año del mes anterior

    const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
    setNumberOfDaysPrevMonth(daysInPrevMonth);
  }, [month, year]);

  const initDate = () => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  };

  const getNoOfDays = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    setNumberOfDays(daysInMonth);
  };

  const getFirstDayOfMonth = () => {
    const firstDay = new Date(year, month, 1).getDay();
    setFirstDayOfMonth(firstDay);
  };

  const decreaseMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const increaseMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };



  return (
    <div>
      <div className=' w-full h-[5rem] flex items-center'>
        <div className='flex items-center justify-between py-2 px-6'>
          <div className='px-1 flex items-center'>

            <div className=' mx-4'>
              <button
                type='button'
                className='leading-none rounded-full transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center'
                onClick={decreaseMonth}
              >
                <svg
                  className='h-6 w-6 text-gray-500 inline-flex leading-none'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7'></path>
                </svg>
              </button>
              <div className=' inline-flex h-6'></div>
              <button
                type='button'
                className='leading-none rounded-full transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1'
                onClick={increaseMonth}
              >
                <svg
                  className='h-6 w-6 text-gray-500 inline-flex leading-none'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7'></path>
                </svg>
              </button>
            </div>
            <div>
            <span className="text-lg  text-black mr-1">{MONTH_NAMES[month]}</span>
            <span className="text-lg text-black font-normal">{year}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-7'>
          {DAYS.map((day, index) => (
            <div key={index} className='px-4 py-2 text-center text-gray-600 text-sm uppercase tracking-wide font-bold border-r border-t'>
              {day}
            </div>

          ))}


          {[...Array(firstDayOfMonth).keys()].map((_, index) => (
            <div
              key={index}
              className=" border-r border-b flex justify-center "
              style={{ height: "120px" }}
            >
              <div className='text-gray-400 text-sm uppercase tracking-wide  text-center'>
                {numberOfDaysPrevMonth - firstDayOfMonth + index + 1}
              </div>
            </div>
          ))}
          {[...Array(numberOfDays).keys()].map((date) => (
            <div
              key={date}
              className=" border-r border-b flex justify-center "
              style={{ height: "120px" }}
            >
              <div className='mt-2 inline-flex w-6 h-6 justify-center items-center cursor-pointer text-center leading-none rounded-full hover:bg-gray-200 hover:w-8 hover:h-8 transition ease-in-out d'>

                {date + 1}
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>

  );
};

export default Calander;
