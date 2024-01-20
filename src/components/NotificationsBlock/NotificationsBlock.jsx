import React, { useState, useEffect } from 'react'
import FilterBlock from '../FilterBlock/FilterBlock'
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";

const datos = [
    {
        id: 1,
        imagen: "https://th.bing.com/th/id/R.865f5f7479be8a152bb09a1f4dcaa763?rik=GPa6XF9S4XB5Lw&pid=ImgRaw&r=0",
        nombre: "Ferrary",
        descripcion: "caro",
        hora: "10:00 AM",
    },
    {
        id: 2,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super caroaaaaaaaaaa",
        hora: "02:30 PM",
    },
    {
        id: 3,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super caroaaaaaaaaaaaasssssss",
        hora: "02:30 PM",
    },
    {
        id: 4,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },
    {
        id: 5,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },
    {
        id: 6,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },
    {
        id: 7,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },
    {
        id: 8,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "1 hora ",
    },
    {
        id: 9,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },

    // Agrega más datos según sea necesario
];
function NotificationsBlock() {

    return (<>
        <nav className="bg-black">
            <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-6">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-end sm:justify-start">
                        <div className=" hidden sm:flex">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for aircraft"
                                    className="border border-black text-white bg-gray-600 px-6 py-2 rounded-full focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>



                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <button type="button" className="relative bg-orange-500 items-center justify-center text-white rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 pr-8 mr-10 pl-8 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            Add Aircraft
                        </button>

                        <button type="button" className="relative rounded-full bg-white-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 pr-10 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <HiMagnifyingGlass color='white' className="h-6 w-6" />
                        </button>

                        <button
                            type="button"
                            className="relative rounded-full bg-white-800 p-1 pr-10 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View Message </span>
                            < IoMdNotifications color='white' className="h-6 w-6" />
                        </button>

                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>

                                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>


                            {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                 <div className="flex items-center justify-end sm:justify-start">
                    <div className="ml-6 hidden sm:flex">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-black text-white bg-gray-600 px-6 py-2 rounded-full focus:outline-none"
                            />
                            <HiMagnifyingGlass color='white' className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                        </div>
                    </div>
                </div>

            </div>
        </div> */}
        </nav>
        {/* <div className=' flex flex-col justify-end self-end'>
            <Cards></Cards>
            <ReserveDetails></ReserveDetails>
        </div> */}



        <div className="pl-10 flex flex-row ">
            <div className="flex-grow">
                <h1 className="text-4xl pt-16 font-bold  text-white mb-4">Notification</h1>
                <div className="flex pt-2 pb-20 h-screen">
                    <div className="w-full bg-gray-900 rounded-lg p-4 relative">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold text-white mb-4">New update</h1>
                            <select
                                className="font-bold rounded-full text-white mb-4 rounded-lg bg-gray-800 outline-none"
                            >
                                <option value="" disabled selected hidden>
                                    Filter by date
                                </option>
                                {/* Agrega opciones adicionales según tus necesidades */}
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        <ul className="list-none " style={{ maxHeight: 'calc(4 * (6.5rem + 3.5rem) + 1.5rem)', overflowY: 'auto' }}>
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
                                                    <p className="text-lg text-white font-semibold">{item.nombre}</p>
                                                    <p className="text-white">{item.descripcion}</p>
                                                    {/* Letrero de Comentario */}
                                                    <p className="text-gray-500 mt-2">Comentario</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-white pr-2">{item.hora}</p>
                                                    <div className="w-3 h-3  bg-orange-500 rounded-full mr-2"></div>

                                                </div>
                                            </div>
                                            {/* Botones Like y Reply */}
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
            <div className='pl-16 pt-36 pr-16'>
                <FilterBlock></FilterBlock>
            </div>
        </div>
    </>




    )

}

export default NotificationsBlock