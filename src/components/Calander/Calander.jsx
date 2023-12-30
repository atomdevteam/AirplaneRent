import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import { useContextAir } from '../../Context';
import { FaPlane } from "react-icons/fa6";
import Loader from '../Loader/Loader';
const Calander = () => {
  const { logout, user } = useContextAir()
  const [open2, setOpen2] = useState(false);
  const calendarRef = useRef(null);
  let initialX = null;
  const [touchAnimation, setTouchAnimation] = useState(false);

  const handleTouchStart = (e) => {
    initialX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      if (initialX === null) {
        return;
      }

      const currentX = e.touches[0].clientX;
      const diffX = initialX - currentX;

      if (diffX > 0) {
        // Swiped left - Go to next day
        console.log('Swiped left - Go to next day');
        // Implementa la lógica para cambiar al día siguiente en el calendario
        increaseMonth()
        setTouchAnimation(true);
      } else {
        // Swiped right - Go to previous day
        console.log('Swiped right - Go to previous day');
        decreaseMonth()
        setTouchAnimation(true);
      }

      initialX = null;
    }
  };

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

  const handleLogout = (e) => {
    e.preventDefault()
    console.log("Logout")
    logout()
    localStorage.clear();
    window.location.reload();

    return (
      <Navigate to='/' replace />
    )
  }

  const [loadingCalendar, setLoadingCalendar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingCalendar(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loadingCalendar) {
    return <Loader />;
  }
  return (

    <div
      ref={calendarRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ touchAction: 'none' }}
      className='relative'
    >
      {touchAnimation && (
        <FaPlane
          className="absolute top-1/2 left-full transform -translate-y-1/2 animate-flyLeft text-blue-500"
          onAnimationEnd={() => setTouchAnimation(false)} // Oculta el avión al finalizar la animación
        />
      )}
      <div className=' flex items-center relative justify-between  px-5 py-6 w-full'>
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
        <div className="flex gap-3 items-center  user cursor-pointer"
          onClick={() => !open2 ? setOpen2(true) : setOpen2(false)}
        >
          <div

            className="h-6 w-6  relative  rounded-full  bg-gray-200">
            <BsPersonCircle className="text-gray-500 w-full h-full" />
            <div
              style={open2 ? { display: 'block' } : { display: 'none' }}
              className="drop-down w-48 overflow-hidden bg-white shadow absolute top-12 right-3">
              <ul onClick={handleLogout}>
                <li className="px-3 py-3 text-md font-medium flex items-center space-x-2 hover:bg-slate-400">
                  <span
                    className='hover:bg-gray-400'>
                    Log Out
                  </span>
                </li>
              </ul>
            </div>

          </div>
          <div className="text-gray-900 font-medium">
          {user && user.displayName}
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
              <Link to={`/hours/${date + 1}/${month}/${year}`} className='mt-2 inline-flex w-6 h-6 justify-center items-center cursor-pointer text-center leading-none rounded-full hover:bg-gray-200 hover:w-8 hover:h-8 transition ease-in-out d'>

                {date + 1}
              </Link>
            </div>
          ))}


        </div>
      </div>
    </div>

  );
};

export default Calander;
