// src/components/Bar.js

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Bar = () => {
    return (
        <div className=''>
            <div className='bg-[#2c2c2c] w-auto  flex items-center justify-center rounded-full'>
                <div className='grid grid-cols-3 items-center p-2'>
                    <div className='flex flex-col mx-6'>
                        <span className='text-white'>User information</span>
                        <span className='text-gray-500'>Manage your account details</span>
                    </div>
                    <div className='border-l border-gray-700 pl-4'>
                        <div className='flex flex-col'>
                            <span className='text-white'>Notifications</span>
                            <span className='text-gray-500'>View important updates</span>
                        </div>
                    </div>
                    <div className='border-l border-gray-700 pl-4 flex flex-row mx-6'>
                        <div className='flex flex-col'>
                            <span className='text-white'>Airplane Rentals</span>
                            <span className='text-gray-500'>Rent a Plane to fly</span>
                        </div>


                       <div className='ml-[2rem]'>
                        <button className='bg-orange-500 rounded-full p-4'>
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
