import React, { useState, useEffect } from 'react'
import { useContextAir } from '../../Context';
import { Link,useNavigate } from 'react-router-dom';

const datos = [
    {
        id: 1,
        imagen: "https://th.bing.com/th/id/R.865f5f7479be8a152bb09a1f4dcaa763?rik=GPa6XF9S4XB5Lw&pid=ImgRaw&r=0",
        nombre: "Ferrary",
        descripcion: "1 of 12 checks,Aircraft Service",
        hora: "10:00 AM",
    },
    {
        id: 2,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "1 of 12 checks,Aircraft Service",
        hora: "02:30 PM",
    },
    {
        id: 3,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "1 of 12 checks,Aircraft Service",
        hora: "02:30 PM",
    },
    {
        id: 4,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "1 of 12 checks,Aircraft Service",
        hora: "02:30 PM",
    },
    {
        id: 5,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "1 of 12 checks,Aircraft Service",
        hora: "02:30 PM",
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
        <div className="w-full lg:w-full flex flex-col space-y-4 p-4 ">

            {/* Visually appealing calendar */}
            <div className="p-4 rounded-lg">
                <div className="mb-4 text-2xl font-bold text-white">{currentMonth} {currentYear}</div>
                <div className="grid grid-cols-7 gap-8 text-white">
                    {/* Days of the week */}
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesd', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                        <div key={day} className="text-center font-bold">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days of the current week */}
                <div className="grid grid-cols-7 gap-4 text-white">
                    {Array.from({ length: 7 }, (_, index) => index).map((day) => {
                        const currentDay = new Date(firstDayOfWeek);
                        currentDay.setDate(firstDayOfWeek.getDate() + day);
                        return (
                            <div key={day} className="text-center rounded-full py-2 relative">
                                {day > 0 && (
                                    <div className="absolute h-4 w-px bg-white left-0 top-1/2 transform -translate-y-1/2"></div>
                                )}
                                <span className={` rounded-full  ${calenderAll && calenderAll.some((entry) => entry.date === `${year}-${(month + 1).toString().padStart(2, "0")}-${(currentDay.getDate()).toString().padStart(2, "0")}`) ?
                                    Green(currentDay.getDate()) === true && Oragen(currentDay.getDate()) === true && Oragen2(currentDay.getDate()) === true ? "bg-red-200" : Green(currentDay.getDate()) === true ? "bg-orange-200" : "bg-green-200" : ""}
            `}>{currentDay.getDate()}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="mb-4 text-1xl font-bold text-white">Upcoming Reserve items</div>
            <ul className="list-none p-4" style={{ maxHeight: 'calc(4 * (3rem + 2rem) + 1.5rem)', overflowY: 'auto' }}>
                {datos.map((item) => (
                    <li key={item.id} className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4">
                        <img
                            src={item.imagen}
                            className="rounded-full h-12 w-12 lg:h-12 lg:w-12 object-cover mb-2 lg:mb-0 lg:mr-4"
                        />
                        <div className="flex flex-col flex-grow">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-lg text-white font-semibold">{item.nombre}</p>
                                    <p className="text-white">{item.descripcion}</p>
                                </div>
                                <p className="text-white">{item.hora}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex justify-center mt-4">
                <button  onClick={handleButtonClick} className="w-full bg-white text-black py-2 px-4 rounded-full">View Entire Schedule</button>
            </div>

        </div>


    )
}
export default ReserveDetails