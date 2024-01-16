import React from 'react'
import { Bar } from 'react-chartjs-2';
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
        <div className='mt-[2rem] w-[30rem]'>
            <div className='flex flex-col ml-[1rem]'>
                <div className='mt-[2rem]'>
                    <h2 className='text-gray-300'>My Aircraft Reserves</h2>
                </div>
                <div className=' mt-[2rem]'>
                    <Boxes2 actReserves={2} />
                </div>
                <div className='mt-[2rem] text-white'>
                    <Chart2 />
                </div>

            </div>
        </div>
    )
}

const Boxes2 = ({ actReserves }) => {
    return (
        <>
            <div className='bg-[#2c2c2c] rounded-xl mr-6 w-[30rem] h-full'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    <h1 className='text-white mt-4'> {actReserves} Active reserves</h1>
                    <span className='text-gray-500 mt-[1rem] text-xs'></span>
                    <div className="container mx-auto mt-8">
                        <table className="min-w-full  text-gray-300 text-xs">
                            <tbody>
                                {reservations.map((rese, index) => (
                                    <tr key={index} className="">
                                        <td className="flex items-center p-4">
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
                            <button className="w-[140px] h-[40px] p-[16px, 0px] rounded-full bg-white hover:bg-gray-400 text-black">
                                View All Reserves
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

const reportData = [
    {
        id: 14,
        month: "Sund",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Mond",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Tuesd",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Wedn",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "Thursd",
        value1: 45,
        value2: null
    },
    {
        id: 19,
        month: "Frid",
        value1: 45,
        value2: null
    },
    {
        id: 20,
        month: "Saturd",
        value1: 45,
        value2: null
    }
];

import plus from '../../assets/plus.svg'
import "./Report.css";
const Chart2 = () => {
    const horas = Array.from({ length: 7 }, (_, i) => i);
    const labels = ['Sund', 'Mond', 'Tuesd', 'Wedn', 'Thursd', 'Frid', 'Saturd'];
    return (
        <div className="grid-one-item grid-common grid-c3">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Total Reserves</h3>
                {/* <button className="grid-c-title-icon">
                <img src={ plus } />
            </button> */}
            </div>
            <div className="grid-c3-content">
                <div className="grid-chart">
                    <div className="chart-vert-value">
                        {horas.reverse().map((hora, index) => (
                            <>
                                <span key={index}>{hora}h</span>

                            </>

                        ))}
                        {/* <span>6h</span>
                        <span>5h</span>
                        <span>4h</span>
                        <span>3h</span>
                        <span>2h</span>
                        <span>1h</span>
                        <span>0h</span> */}
                    </div>
                    {
                        reportData.map((report) => (
                            <div className="grid-chart-bar" key={report.id}>
                                <div className="bar-wrapper">
                                    <div className="bar-item1" style={{ height: `${report.value1 !== null ? "40%" : ""}` }}></div>
                                    <div className="bar-item2" style={{ height: `${report.value2 !== null ? "60%" : ""}` }}></div>
                                    {/* <hr className="w-full border-t border-gray-300 my-1" /> */}
                                </div>

                                {/* Línea horizontal que atraviesa las barras */}
                                <div className="w-full h-px bg-gray-300"></div>
                                <span className="grid-hortz-value">{report.month}</span>

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

const Chart = ({ }) => {
    const horas = Array.from({ length: 7 }, (_, i) => i);
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const chartData = [112, 10, 225, 134, 101, 80, 50];
    const labels = ['Sund', 'Mond', 'Tuesd', 'Wedn', 'Thursd', 'Frid', 'Saturd'];

    const [tooltipContent, setTooltipContent] = React.useState('');
    const [tooltipOpen, setTooltipOpen] = React.useState(false);
    const [tooltipX, setTooltipX] = React.useState(0);
    const [tooltipY, setTooltipY] = React.useState(0);

    const showTooltip = (e) => {
        setTooltipContent(e.target.textContent);
        setTooltipX(e.target.offsetLeft - e.target.clientWidth);
        setTooltipY(e.target.clientHeight + e.target.clientWidth);
        setTooltipOpen(true);
    };

    const hideTooltip = () => {
        setTooltipContent('');
        setTooltipOpen(false);
        setTooltipX(0);
        setTooltipY(0);
    };

    return (
        <div className="antialiased sans-serif w-lg min-h-screen">
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

            <div className="px-4">
                <div className="max-w-lg mx-auto py-10">
                    <div className="shadow p-6 rounded-lg ">
                        <div className="md:flex md:justify-between md:items-center">
                            <div>
                                <h2 className="text-xl text-white font-bold leading-tight">Total Reserves</h2>
                                {/* <p className="mb-2 text-gray-600 text-sm">Monthly Average</p> */}
                            </div>

                            {/* <div className="mb-4">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                                    <div className="text-sm text-gray-700">Sales</div>
                                </div>
                            </div> */}
                        </div>

                        <div className="line my-8 relative">
                            {/* <div x-show="tooltipOpen" className="p-0 m-0 z-10 shadow-lg rounded-lg absolute h-auto block" style={{ bottom: `${tooltipY}px`, left: `${tooltipX}px` }}>
                                <div className="shadow-xs rounded-lg bg-white p-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <div>Sales:</div>
                                        <div className="font-bold ml-2">
                                            <span dangerouslySetInnerHTML={{ __html: tooltipContent }}></span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="flex -mx-2 items-end mb-2">
                                {chartData.map((data, index) => (
                                    <div key={index} className="px-2 w-1/6">
                                   
                                        <div style={{ height: `${data}px` }} className="transition ease-in duration-200 bg-blue-600 hover:bg-blue-400 relative" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                                            <div className="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm">{data}</div>
                                        </div>
                                    </div>
                                ))}
                            </div> */}

                            {/* <div className="border-t border-gray-400 mx-auto" style={{ height: '1px', width: `${100 - 1 / chartData.length * 100 + 3}%` }}></div> */}
                            <div className='flex flex-col'>
                                {horas.reverse().map((hora, index) => (
                                    <div key={index} className='text-white flex items-center'>
                                        <span className="pr-2">{hora}h</span>
                                        <div className="w-full border-t border-gray-400"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex ml-8 items-end">
                                {labels.map((label, index) => (
                                    <div key={index} className="px-2 w-1/6">
                                        <div className="bg-red-600 relative">
                                            <div className="text-center absolute top-0 left-0 right-0 h-2 -mt-px bg-gray-400 mx-auto" style={{ width: '8px' }}></div>
                                            <div className="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm">{label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // return (

    //   <div className='flex flex-col mt-2 ml-[1rem]'>
    //     <h1 className='text-white mt-4'>Total reserves</h1>

    //     <div className='mt-4'>
    //       <div className='flex flex-col'>
    //         {horas.reverse().map((hora, index) => (
    //           <div key={index} className='text-white flex items-center'>
    //             <span className="pr-2">{hora}h</span>
    //             <div className="w-full border-t border-gray-400"></div>
    //           </div>
    //         ))}
    //       </div>

    //       <div className='flex'>

    //         <div className='w-8'></div>

    //         {DAYS.map((day, index) => (
    //           <div key={index} className='text-white text-xs flex flex-col items-center mr-4'>
    //             <span>{day}</span>

    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // );

}








export default AircraftReserves