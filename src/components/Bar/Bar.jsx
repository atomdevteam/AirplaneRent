import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Bar = () => {

    return (
        <div className=''>
            <div className='bg-[#2c2c2c] w-auto h-auto hidden items-center justify-center rounded-full p-4 md:flex'>

                <div className=' grid-cols-3 items-center p-4 hidden md:grid'>
                    <div className='flex flex-col mx-2'>
                        <span className='text-white'>User information</span>
                        <span className='text-gray-500'>Manage your account details</span>
                    </div>
                    <div className='border-l border-gray-700 pl-4'>
                        <div className='flex flex-col'>
                            <span className='text-white'>Notifications</span>
                            <span className='text-gray-500'>View important updates</span>
                        </div>
                    </div>
                    <div className='border-l border-gray-700 pl-4 flex flex-row items-center mx-4'>
                        <div className='flex flex-col'>
                            <span className='text-white'>Airplane Rentals</span>
                            <span className='text-gray-500'>Rent a Plane to fly</span>
                        </div>

                        <div className='ml-8'>
                            <button className='bg-orange-500 rounded-2xl p-4'>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative bg-[#2c2c2c] w-auto h-auto  items-center justify-center rounded-2xl  p-4 md:hidden'>
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
        </div>
    );
};

export default Bar;
