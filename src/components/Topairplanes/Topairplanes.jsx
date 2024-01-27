import React from 'react'
import aircraft from '../../assets/aircraft.jpg'
import { IoIosArrowForward } from 'react-icons/io'
import { FaHeart } from "react-icons/fa6";
import cabin from "../../assets/cabin.jpg"
import card2 from "../../assets/card2.jpg"
import card3 from "../../assets/card3.jpg"
import card4 from "../../assets/card4.jpg"
import card5 from "../../assets/card5.jpg"
const Topairplanes = () => {
    return (
        <div className='mt-[1rem] mb-[1rem]'>

            <div className=" flex items-center justify-center">
                <div className="container">
                    <div className="text-white mb-[1rem]">
                        Top-rated airplanes
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">

                        <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                        <img src={card2} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />

                            <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                            <div className="px-1 py-4">
                                <div className="text-white">Luxury Jet 50</div>
                                <p className="text-gray-400 text-base">
                                    Private Jet
                                </p>
                            </div>
                            <div className="px-1 flex items-center justify-between">
                                <span className='text-white'>from $5000/hour</span>
                                <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                            </div>
                        </div>
                        <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                            <img src={cabin} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                            <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                            <div className="px-1 py-4">
                                <div className="text-white">Luxury Jet 50</div>
                                <p className="text-gray-400 text-base">
                                    Private Jet
                                </p>
                            </div>
                            <div className="px-1 flex items-center justify-between">
                                <span className='text-white'>from $5000/hour</span>
                                <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                            </div>


                        </div>
                        <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                            <img src={card4} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                            <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                            <div className="px-1 py-4">
                                <div className="text-white">Luxury Jet 50</div>
                                <p className="text-gray-400 text-base">
                                    Private Jet
                                </p>
                            </div>
                            <div className="px-1 flex items-center justify-between">
                                <span className='text-white'>from $5000/hour</span>
                                <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                            </div>
                        </div>
                        <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                            <img src={card3} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                            <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                            <div className="px-1 py-4">
                                <div className="text-white">Luxury Jet 50</div>
                                <p className="text-gray-400 text-base">
                                    Private Jet
                                </p>
                            </div>
                            <div className="px-1 flex items-center justify-between">
                                <span className='text-white'>from $5000/hour</span>
                                <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                            </div>
                        </div>
                        <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                            <img src={card5} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                            <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                            <div className="px-1 py-4">
                                <div className="text-white">Luxury Jet 50</div>
                                <p className="text-gray-400 text-base">
                                    Private Jet
                                </p>
                            </div>
                            <div className="px-1 flex items-center justify-between">
                                <span className='text-white'>from $5000/hour</span>
                                <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topairplanes