import React from 'react';
import aircraft from '../../assets/aircraft.jpg';
import Bar from '../Bar/Bar';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardExplore = () => {
    return (
        <div>
            <div className='relative mt-[2rem]'>
                <div
                    className="bg-cover bg-center text-white text-center  rounded-xl flex justify-center items-center"
                    style={{
                        backgroundImage: `url(${aircraft})`,
                        height: '300px',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <h1 className="text-4xl font-bold mb-4">
                            Explore Our Airplane Rental Services
                        </h1>
                        <p className="text-lg">
                            Choose from a wide range of airplanes for your next flight!
                        </p>

                    </div>
                    <div className='hidden md:flex justify-center items-center absolute -bottom-12 inset-x-0'>
                        <Bar />
                    </div>
                </div>



            </div>
            <div className='md:hidden mt-[2rem]'>
                <BarMobile />
            </div>
        </div>
    );
};

const BarMobile = () => {

    return (
        <div className='relative bg-[#2c2c2c] w-auto h-auto  items-center justify-center rounded-2xl  p-4 '>
            <div className='grid grid-cols-1   items-center p-4 '>
                <div className='flex flex-col pb-8'>
                    <span className='text-white'>User information</span>
                    <span className='text-gray-500'>Manage your account details</span>
                </div>
                <div className='border-t border-gray-700 pb-8'>
                    <div className='flex flex-col mt-4'>
                        <span className='text-white'>Notifications</span>
                        <span className='text-gray-500'>View important updates</span>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between border-t border-gray-700 '>
                    <div className='flex flex-col mt-4'>
                        <span className='text-white'>Airplane Rentals</span>
                        <span className='text-gray-500'>Rent a Plane to fly</span>
                    </div>

                    <div className=' mt-4'>
                        <button className='bg-orange-500 rounded-2xl p-4'>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardExplore;
