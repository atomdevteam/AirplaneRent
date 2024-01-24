import React from 'react'
import aircraft from '../../assets/aircraft.jpg'
import { IoIosArrowForward } from 'react-icons/io'
import { FaHeart } from "react-icons/fa6";
const Topairplanes = () => {
    return (
        <div className='mt-[1rem] mb-[1rem]'>
            <div className="text-white">
                Top-rated airplanes
            </div>
            {/*   <div className="max-w-md relative mt-[2rem]">
                        <img className="w-[16rem] h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                        <button className="bg-white text-black p-1 mx-1 my-1 rounded-full absolute bottom-0 left-0 ">
                            Botón Blanco
                        </button>
                    </div> */}
            <div class="grid grid-cols-4  text-white space-x-8">
                <div className='bg-[#2c2c2c]  relative flex flex-col max-w-md  h-auto'>
                    <img src={aircraft} className='w-[90%] mx-4 my-4 h-40 rounded-lg' />
                    <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                    <div className='flex flex-col items-start mx-4 my-4'>
                        <span className='text-white'>Luxury Jet 500</span>
                        <span className='text-gray-400'>Private Jet</span>

                        <div className='flex flex-row'>
                            <span className='text-white'>from $5000/hour</span>
                            <button className='ml-40'>< IoIosArrowForward className="text-sm text-gray-500 mr-5" size={15} color='white' /></button>
                        </div>

                    </div>
                </div>
                <div className='bg-[#2c2c2c]  relative flex flex-col max-w-md  h-auto'>
                    <img src={aircraft} className='w-[90%] mx-4 my-4 h-40 rounded-lg' />
                    <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                    <div className='flex flex-col items-start mx-4 my-4'>
                        <span className='text-white'>Luxury Jet 500</span>
                        <span className='text-gray-400'>Private Jet</span>

                        <div className='flex flex-row'>
                            <span className='text-white'>from $5000/hour</span>
                            <button className='ml-40'>< IoIosArrowForward className="text-sm text-gray-500 mr-5" size={15} color='white' /></button>
                        </div>

                    </div>
                </div>
                <div className='bg-[#2c2c2c]  relative flex flex-col max-w-md  h-auto'>
                    <img src={aircraft} className='w-[90%] mx-4 my-4 h-40 rounded-lg' />
                    <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                    <div className='flex flex-col items-start mx-4 my-4'>
                        <span className='text-white'>Luxury Jet 500</span>
                        <span className='text-gray-400'>Private Jet</span>

                        <div className='flex flex-row'>
                            <span className='text-white'>from $5000/hour</span>
                            <button className='ml-40'>< IoIosArrowForward className="text-sm text-gray-500 mr-5" size={15} color='white' /></button>
                        </div>

                    </div>
                </div>
                <div className='bg-[#2c2c2c]  relative flex flex-col max-w-md  h-auto'>
                    <img src={aircraft} className='w-[90%] mx-4 my-4 h-40 rounded-lg' />
                    <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                    <div className='flex flex-col items-start mx-4 my-4'>
                        <span className='text-white'>Luxury Jet 500</span>
                        <span className='text-gray-400'>Private Jet</span>

                        <div className='flex flex-row'>
                            <span className='text-white'>from $5000/hour</span>
                            <button className='ml-40'>< IoIosArrowForward className="text-sm text-gray-500 mr-5" size={15} color='white' /></button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Topairplanes