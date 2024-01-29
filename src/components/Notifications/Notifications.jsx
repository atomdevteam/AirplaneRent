import React, { useState, useEffect } from 'react'
import FilterBlock from '../FilterBlock/FilterBlock'
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";

const datos = [
    {
        id: 1,
        imagen: "https://th.bing.com/th/id/R.865f5f7479be8a152bb09a1f4dcaa763?rik=GPa6XF9S4XB5Lw&pid=ImgRaw&r=0",
        nombre: "Reservations update for Aicraft 1",
        descripcion: "on Reservation - 3600",
        descripcion2: "on Reservation update successfully",
        hora: "1 hour ago",
    },
    {
        id: 2,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Reservations update for Aicraft 2",
        descripcion: "on Reservation - 3600",
        descripcion2: "on Reservation update successfully",
        hora: "1 hour ago",
    },
    // {
    //     id: 3,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Reservations update for Aicraft 3",
    //     descripcion: "on Reservation - 3600",
    //     descripcion2: "on Reservation update successfully",
    //     hora: "1 hour ago",
    // },
    // {
    //     id: 4,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Reservations update for Aicraft 3",
    //     descripcion: "on Reservation - 3600",
    //     descripcion2: "on Reservation update successfully",
    //     hora: "1 hour ago",
    // },
    // {
    //     id: 5,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Reservations update for Aicraft 3",
    //     descripcion: "on Reservation - 3600",
    //     descripcion2: "on Reservation update successfully",
    //     hora: "1 hour ago",
    // },
    // {
    //     id: 6,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Reservations update for Aicraft 3",
    //     descripcion: "on Reservation - 3600",
    //     descripcion2: "on Reservation update successfully",
    //     hora: "1 hour ago",
    // },
    // {
    //     id: 7,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Reservations update for Aicraft 3",
    //     descripcion: "on Reservation - 3600",
    //     descripcion2: "on Reservation update successfully",
    //     hora: "1 hour ago",
    // },
    // {
    //     id: 4,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Bugati",
    //     descripcion: "super carosssssssssssssssssssssssssssssssssssss",
    //     hora: "02:30 PM",
    // },
    // {
    //     id: 5,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Bugati",
    //     descripcion: "super carosssssssssssssssssssssssssssssssssssss",
    //     hora: "02:30 PM",
    // },
    // {
    //     id: 6,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Bugati",
    //     descripcion: "super carosssssssssssssssssssssssssssssssssssss",
    //     hora: "02:30 PM",
    // },
    // {
    //     id: 7,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Bugati",
    //     descripcion: "super carosssssssssssssssssssssssssssssssssssss",
    //     hora: "02:30 PM",
    // },
    // {
    //     id: 8,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Bugati",
    //     descripcion: "super carosssssssssssssssssssssssssssssssssssss",
    //     hora: "1 hora ",
    // },
    // {
    //     id: 9,
    //     imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
    //     nombre: "Bugati",
    //     descripcion: "super carosssssssssssssssssssssssssssssssssssss",
    //     hora: "02:30 PM",
    // },

    // Agrega más datos según sea necesario
];
function Notifications() {


    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];


    return (
        <>
            <div className='mt-[2rem] pl-10 mb-[1rem]'>
                <div className='bg-[#2c2c2c] rounded-xl mr-6  h-auto'>
                    <div className='flex flex-col mt-2 ml-[1rem]'>
                        <div className="flex justify-between mt-4">
                            <h1 className='text-white mt-4'>New Update</h1>
                            <select
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="py-3 px-4 mr-[2rem] block  text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
                            >

                                <option value="" disabled selected hidden>
                                    Filter by date
                                </option >
                                {options.map((option) => (
                                    <option className='text-black' key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className=' mt-[1rem] mx-[0.5rem]'>
                            <ul className="list-none" >
                                {datos.map((item) => (
                                    <div className=' pb-6'>

                                        <li key={item.id} className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4">
                                            <img
                                                src={item.imagen}
                                                className=" rounded-full h-12 w-12 lg:h-16 lg:w-16 object-cover mb-4 lg:mb-0 lg:mr-4"
                                            />
                                            <div className="flex flex-col flex-grow ">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="text-lg text-white">{item.nombre}</p>
                                                        <p className="text-gray-400">{item.descripcion}</p>

                                                        <p className="text-gray-400 mt-2">{item.descripcion2}</p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <p className="text-white pr-2">{item.hora}</p>
                                                        <div className="w-3 h-3  bg-orange-500 rounded-full mr-2"></div>

                                                    </div>
                                                </div>

                                                <div className="flex mt-2 space-x-2">
                                                    <button className="text-white">Like</button>
                                                    <button className="text-white">Reply</button>
                                                </div>
                                            </div>

                                        </li>
                                        <div className='border-gray-500 border-b-2'></div>
                                    </div>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            {/* <div className="pl-10">
            <div className="flex-grow">
                <h1 className="text-4xl pt-16 font-bold  text-white mb-4">Notification</h1>
                <div className="flex pt-2 pb-20 h-screen">
                    <div className="w-full h-auto bg-[#2c2c2c] rounded-lg p-4 relative">
                        <div className="flex justify-between">
                            <h1 className="text-[1.5rem]  text-white mb-4">New update</h1>
                            <select
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="py-3 px-4 block  text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
                            >

                                <option value="" disabled selected hidden>
                                    Filter by date
                                </option >
                                {options.map((option) => (
                                    <option className='text-black' key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <ul className="list-none" >
                            {datos.map((item) => (
                                <div className='border-white border-b-2 pb-6'>
                                    <li key={item.id} className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4">
                                        <img
                                            src={item.imagen}
                                            className="rounded-full h-12 w-12 lg:h-16 lg:w-16 object-cover mb-2 lg:mb-0 lg:mr-4"
                                        />
                                        <div className="flex flex-col flex-grow ">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-lg text-white">{item.nombre}</p>
                                                    <p className="text-gray-400">{item.descripcion}</p>
                             
                                                    <p className="text-gray-400 mt-2">{item.descripcion2}</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-white pr-2">{item.hora}</p>
                                                    <div className="w-3 h-3  bg-orange-500 rounded-full mr-2"></div>

                                                </div>
                                            </div>
                                    
                                            <div className="flex mt-2 space-x-2">
                                                <button className="text-white">Like</button>
                                                <button className="text-white">Reply</button>
                                            </div>
                                        </div>

                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
 
        </div> */}
        </>




    )

}

export default Notifications