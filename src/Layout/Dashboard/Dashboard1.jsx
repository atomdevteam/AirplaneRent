import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import ReserveDetails from '../../components/ReserveDetails/ReserveDetails'
import Cards from '../../components/Cards/Cards'
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails"
import FlightStatistics from "../../components/FlightStatistics/FlightStatistics"
import AdditionalPersonalInformation from "../../components/AdditionalPersonalInformation/AdditionalPersonalInformation"
import AirplaneHistory from "../../components/AirplaneHistory/AirplaneHistory"
import Logbook from "../../components/Logbook/Logbook"
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from 'react-router-dom';
const Dashboard1 = () => {
    return (
        <div className=''>

            <Navbar />

            <div className="flex flex-col">

                <div className="flex flex-col pt-10 sm:flex-row mx-8">
                    <PersonalDetails />
                    <FlightStatistics />
                </div>
{/*  pl-4 pr-4 pt-10*/}
                <div className="flex flex-col pt-10 mx-8  sm:flex-row  items-center justify-center ">
                    <AdditionalPersonalInformation />
                </div>

                <div className="flex flex-col pt-10  sm:flex-row mx-8 my-8">
                    <AirplaneHistory />
                    <Logbook />
                </div>

            </div>
        </div>

    )
}
function Navbar() {

    return (
        <>
            <nav className="bg-black border-gray-800 border-b-2 ">
                <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-6 ">
                    <div className="relative flex h-16  items-center justify-between">
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
                        {/* <div className="flex items-center   justify-end sm:justify-start mb-4">
                          <div className=" hidden sm:flex ">
                              <div className="relative">
                                  <input
                                      type="text"
                                      placeholder="Search..."
                                      className="border border-black text-white bg-gray-600 px-6 py-2 rounded-full focus:outline-none w-[20rem]"
                                  />
                                  <HiMagnifyingGlass color='white' className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                              </div>
                          </div>
                      </div> */}

                        <div className="flex items-center justify-end sm:justify-start">
                            <div className=" hidden sm:flex">
                                <div className="relative ">
                                    {/*border border-black text-white bg-transparent shadow-md px-6 py-2 rounded-full focus:outline-none  */}
                                    <input
                                        type="text"
                                        placeholder="Search for aiplanes"
                                        className="py-3 px-4 block w-[18rem] placeholder-white text-white text-sm  shadow-xl bg-transparent border-b border-r border-l border-gray-500 rounded-full"
                                      
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="absolute inset-y-0 right-0 flex items-center pr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                            <Link to='/useDashboard/rent' className="bg-orange-400 text-white px-6 py-2 rounded-full hidden md:inline">Rent</Link>
                            <button type="button" className="relative rounded-full bg-white-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                < IoMdNotifications color='white' className="h-6 w-6" />
                            </button>

                            <button
                                type="button"
                                className="relative rounded-full bg-white-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View Message </span>
                                <AiFillMessage color='white' className="h-6 w-6" />
                            </button>

                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>

                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <span className="ml-2 pt-2 text-white">Your Name</span>
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

export default Dashboard1