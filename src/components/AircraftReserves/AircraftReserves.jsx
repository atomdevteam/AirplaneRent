import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Link } from 'react-router-dom';
import Calander from '../Calendar/Calendar';
import HoursComp from '../Hours/Hours';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



const reservations = [
    {
        id: 1,
        avatar: "https://placekitten.com/40/40",
        name: "Aircraft",
        descripcion: "Reserve for Maintenance",
        day: "Due Today"
    },
    {
        id: 2,
        avatar: "https://placekitten.com/40/40",
        name: "Aircraft",
        descripcion: "Reserve for Inspection",
        day: "Tomorrow"
    },
    {
        id: 3,
        avatar: "https://placekitten.com/40/40",
        name: "My",
        descripcion: "Add New Aircraft",
        day: "Reserves"
    },
]

const AircraftReserves = () => {
    return (
        <div className='mt-[1rem]'>
            <div className='flex flex-col ml-[1rem]'>
                <div className='mt-[1rem]'>
                    <h2 className='text-gray-300'>My Aircraft Reserves</h2>
                </div>
                <div className=' mt-[1rem]'>
                    <Boxes2 actReserves={2} />
                </div>
                <div className='mt-[1rem] text-white'>
                    <Chart2 />
                </div>

            </div>
        </div>
    )
}

const Boxes2 = ({ actReserves }) => {

    const [isOpenCalander, setIsOpenCalander] = useState(false)
    const [openHourModal, setOpenHourModal] = useState(false)
    const [DateH, setDate] = useState("")
    const [Month, setMonthH] = useState("")
    const [years, setYears] = useState("")

    const handleOpenModalCalander = (e) => {
        e.preventDefault()
        setIsOpenCalander(true)
    }


    return (
        <>
            <Calander
                isOpenCalander={isOpenCalander}
                setIsOpenCalander={setIsOpenCalander}
                openHourModal={openHourModal}
                setOpenHourModal={setOpenHourModal}
                setDate={setDate}
                setMonthH={setMonthH}
                setYears={setYears}
            />
            <HoursComp
                openHourModal={openHourModal}
                setOpenHourModal={setOpenHourModal}
                setIsOpenCalander={setIsOpenCalander}
                DateH={DateH}
                monthH={Month}
                yearH={years}
            />
            <div className='bg-[#2c2c2c] rounded-xl mr-6  h-full'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    <h1 className='text-white mt-4'> {actReserves} Active reserves</h1>
                    <span className='text-gray-500 mt-[1rem] text-xs'></span>
                    <div className="container mx-auto mt-4">
                        <table className="min-w-full  text-gray-300 text-xs">
                            <tbody>
                                {reservations.map((rese, index) => (
                                    <tr key={index} className="">
                                        <td className="flex items-center p-2">
                                            <img src={rese.avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                                            <span>{rese.name}</span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                                </div>
                                                <span className="ml-2">{rese.descripcion}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">{rese.day}</td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                        <div className="mt-[2rem] mb-4 flex items-center justify-center">
                            <button onClick={(e) => handleOpenModalCalander(e)} className="w-[140px] h-[40px] p-[16px, 0px] rounded-full bg-white hover:bg-gray-400 text-black text-sm">
                                View All Reserves
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}



// import plus from '../../assets/plus.svg'
// import "./Report.css";
const Chart2 = () => {

    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Reserved',
                backgroundColor: 'rgba(44, 44, 44, 1)',
                borderColor: 'rgba(44, 44, 44, 1)',
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(0, 0, 0, 0.6)',
                hoverBorderColor: 'rgba(0, 0, 0, 1)',
                data: [1, 1, 2, 3, 4, 3, 5],
                barThickness: 18,
            },
            {
                label: 'Unreserved',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(255, 165, 0, 0.4)',
                hoverBorderColor: 'rgba(255, 165, 0, 1)',
                data: [6, 6, 6, 6, 6, 6, 6],
                barThickness: 18,
            },
        ],
    };


    const options = {
        scales: {
            x: {
                beginAtZero: true,
                stacked: true,
            },
            y: {
                beginAtZero: true,
                stepSize: 1,
                ticks: {
                    callback: (value) => {
                        if (value === 0) return '0h'
                        if (value === 1) return '1h';
                        if (value === 2) return '2h';
                        if (value === 3) return '3h';
                        if (value === 4) return '4h';
                        if (value === 5) return '5h';
                        if (value === 6) return '6h';
                    },
                },
                maxTicksLimit: 5, // Ajusta el número máximo de ticks
                autoSkip: true, // Permite saltar automáticamente algunos ticks
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    color: 'rgba(75, 85, 99, 1)',
                    zeroLineColor: 'rgba(75, 85, 99, 1)',
                },
            },
        },
    };

    return (
        <div className=" max-w-screen-lg mx-auto mt-4">
            <div className="mb-4">
                <h2 className="text-xl text-white font-bold leading-tight">Total Reserves</h2>
            </div>
            <Bar data={data} options={options} width={640} height={200} />
        </div>
    );
}



export default AircraftReserves