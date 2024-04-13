import React, { useState } from 'react';
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoAirplaneSharp } from 'react-icons/io5';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { MdOutlineSort } from "react-icons/md";
function Navbar({ toggleSidebar }) {

  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setSearchOpen(!isSearchOpen);
  };
    return (
        <>
            <nav className="bg-black">
                <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-6 ">
                    <div className="relative flex h-16  items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button onClick={toggleSidebar} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
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
                            <div className="hidden sm:flex">
                                <div className="flex items-center justify-end sm:justify-start ml-6">
                                    <div className="hidden sm:flex">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Search aircraft"
                                                className="border border-black text-white bg-[#2C2C2C] px-6 py-2 rounded-full focus:outline-none w-[33rem]"
                                            />
                                            <HiMagnifyingGlass color='white' className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:hidden ml-16">
                                <button
                                    className="text-white"
                                    onClick={toggleMobileMenu}
                                >
                                    <HiMagnifyingGlass size={30} style={{ transform: 'scaleX(-1)' }} />
                                </button>
                                {isSearchOpen && (
                                    <div className="absolute top-16 left-0 right-0  py-2 flex flex-row items-center  z-50">
                                        <input
                                                type="text"
                                                placeholder="Search aircraft"
                                                className="block border border-black text-white bg-[#2C2C2C] px-6 py-2 rounded-full focus:outline-none w-[33rem]"
                                            />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                            <button type="button" className="relative rounded-full mx-4 bg-white-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>

                                <div className='relative'>
                                    <IoAirplaneSharp color='white' className="h-6 w-6" />
                                    <div className="absolute bg-red-500 w-3 h-3 top-0 transform -translate-y-1/2 right-0 rounded-full"></div>
                                </div>
                            </button>

                            <button
                                type="button"
                                className="relative rounded-full mx-4 bg-white-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"></span>

                                <div className='relative'>
                                    <IoMdNotifications color='white' className="h-6 w-6" />
                                    <div className="absolute bg-red-500 w-3 h-3 top-0 transform -translate-y-1/2 right-0 rounded-full"></div>
                                </div>
                            </button>

                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>

                                        <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
