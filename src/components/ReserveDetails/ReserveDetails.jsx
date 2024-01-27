import React, { useState, useEffect } from 'react'
import { useContextAir } from '../../Context';
import { Link, useNavigate } from 'react-router-dom';

const datos = [
    {
        id: 1,
        imagen: "https://th.bing.com/th/id/R.865f5f7479be8a152bb09a1f4dcaa763?rik=GPa6XF9S4XB5Lw&pid=ImgRaw&r=0",
        nombre: "Maintenance Check",
        descripcion: "1 of 12 checks, Aircraft Service",
        hora: "09:00 10:00",
    },
    {
        id: 2,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Flight Reservation",
        descripcion: "2 of 12 reservations, John Doe",
        hora: "11:00 12:00",
    },
    {
        id: 3,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Training Session",
        descripcion: "3 of 20 session, Flight Crew",
        hora: "14:00 15:00",
    },
    {
        id: 4,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Maintenance Check",
        descripcion: "1 of 2 checks, Aircraft Service",
        hora: "16:00 17:00",
    },
    {
        id: 5,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Flight Reservation",
        descripcion: "1 of 2 reservation, John Doe",
        hora: "18:00 18:30",
    },

    // Agrega más datos según sea necesario
];
function ReserveDetails() {
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    // Get the current date to display the month and year
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const [calenderAll, setCalenderAll] = useState([])
    const { ShowListHours, ReservationsForDate, GetAll, user, logout } = useContextAir()
    // Calculate the start and end dates of the current week
    const firstDayOfWeek = new Date(currentDate);
    const lastDayOfWeek = new Date(currentDate);
    const diff = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1);
    firstDayOfWeek.setDate(diff);
    lastDayOfWeek.setDate(diff + 6);

    const history = useNavigate();

    const handleButtonClick = () => {
        history('/table');
    };

    useEffect(() => {

        const fetchData = async () => {
            try {
                const partnersData = await GetAll();
                console.log("Hola", partnersData)
                setCalenderAll(partnersData)
                console.log(GetAll())
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const currentDate = new Date();
        setMonth(currentDate.getMonth());
        setYear(currentDate.getFullYear());

        fetchData();

    }, [])

    const Green = (date) => {
        const data = calenderAll.filter((entry) => {
            const formattedDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;

            return (
                entry.date === formattedDate
            );
        });

        for (let hour = 7; hour <= 18; hour++) {
            if (!data.some(reservation => {
                const startHour = parseInt(reservation.start.split(":")[0], 10);
                const endHour = parseInt(reservation.end.split(":")[0], 10);
                return startHour <= hour && endHour >= hour;
            })) {
                return false; // At least one hour is not reserved
            }
        }
        return true;
    }

    const Oragen = (date) => {
        const data = calenderAll.filter((entry) => {
            const formattedDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;

            return (
                entry.date === formattedDate
            );
        });

        for (let hour = 18; hour <= 23; hour++) {
            if (!data.some(reservation => {
                const startHour = parseInt(reservation.start.split(":")[0], 10);
                const endHour = parseInt(reservation.end.split(":")[0], 10);
                return startHour <= hour && endHour >= hour;
            })) {
                return false; // At least one hour is not reserved
            }
        }
        return true;
    }
    const Oragen2 = (date) => {
        const data = calenderAll.filter((entry) => {
            const formattedDate = `${year}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`;

            return (
                entry.date === formattedDate
            );
        });

        for (let hour = 0; hour <= 7; hour++) {
            if (!data.some(reservation => {
                const startHour = parseInt(reservation.start.split(":")[0], 10);
                const endHour = parseInt(reservation.end.split(":")[0], 10);
                return startHour <= hour && endHour >= hour;
            })) {
                return false; // At least one hour is not reserved
            }
        }
        return true;
    }

    return (
        <div className="flex flex-col space-y-4  mt-2 ml-[1rem]">

            {/* Visually appealing calendar */}
            <div className="p-4 rounded-lg">
                <div className="mb-6 mt-4 text-2xl  text-white">{currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} {currentYear}</div>

                <div className="grid grid-cols-7  gap-4 text-gray-400 sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-7">
                    {/* Days of the week */}
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesd', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                        <div key={day} className="text-center">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days of the current week */}
                <div className="grid grid-cols-7 gap-2 text-gray-400 sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-7">
                    {Array.from({ length: 7 }, (_, index) => index).map((day) => {
                        const currentDay = new Date(firstDayOfWeek);
                        currentDay.setDate(firstDayOfWeek.getDate() + day);
                        return (
                            <div key={day} className="text-center rounded-full py-2 relative">
                                {day > 0 && (
                                    <div className="absolute h-4 w-px bg-gray-600 left-0 top-1/2 transform -translate-y-1/2"></div>
                                )}
                                <span className={`rounded-full ${calenderAll && calenderAll.some((entry) => entry.date === `${year}-${(month + 1).toString().padStart(2, "0")}-${(currentDay.getDate()).toString().padStart(2, "0")}`)} `}>{currentDay.getDate()}</span>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* style={{ maxHeight: 'calc(4 * (3rem + 2rem) + 1.5rem)', overflowY: 'auto' }} */}
            <ul className="list-none p-4" >
                <div className="mb-6 text-1xl  text-white">Upcoming Reserve items</div>
                {datos.map((item) => (
                    <li key={item.id} className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4">
                        {/* <img
                            src={item.imagen}
                            className="rounded-full h-12 w-12 lg:h-12 lg:w-12 object-cover mb-2 lg:mb-0 lg:mr-4"
                        /> */}
                        <div className="flex items-center justify-center rounded-full h-12 w-12 lg:h-12 lg:w-12 bg-white text-black font-bold mb-2 lg:mb-0 lg:mr-4">
                            {item.id + 4}
                        </div>
                        <div className="flex flex-col flex-grow">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-base text-white ">{item.nombre}</p>
                                    <p className="text-[0.90rem] text-gray-400 mt-1">{item.descripcion}</p>
                                </div>
                                <p className="text-gray-200">{item.hora}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex justify-center mt-4">
                <button onClick={handleButtonClick} className="w-full bg-white text-black py-2 px-4 rounded-full">View Entire Schedule</button>
            </div>

        </div>


    )
}
export default ReserveDetails