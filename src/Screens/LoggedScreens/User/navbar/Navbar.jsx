import { Link } from 'react-router-dom';
import { FaPlane } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useContextAir } from '../../../../Context';

function Navbar() {
    const {InforPerfil} = useContextAir()

    return (
        <div>
            <nav className="bg-[#161616]  p-4">
                <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-4">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex items-center justify-end sm:justify-start">

                            <div className="hidden sm:flex">
                                <div className="flex items-center justify-end sm:justify-start">
                                    <div className="hidden sm:flex">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Search aircraft"
                                                className="border border-black text-white bg-[#2c2c2c] px-6 py-2 rounded-full focus:outline-none w-[33rem]"
                                            />
                                            <HiMagnifyingGlass color='white' className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <Link to='/rent' className="relative bg-orange-500 items-center justify-center  rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 pr-8 mr-10 pl-8 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">Rent</Link>

                            <button type="button" className="relative rounded-full bg-white-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 pr-10 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <FaPlane color='white' className="h-6 w-6" />
                            </button>

                            <button type="button" className="relative rounded-full bg-white-800 p-1 pr-10 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                < IoMdNotifications color='white' className="h-6 w-6" />
                            </button>

                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-12 w-12 rounded-full" src={InforPerfil?.Photo} alt="" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar