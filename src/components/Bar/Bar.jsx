import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContextAir } from '../../Context';
const Bar = () => {
    const { user } = useContextAir()
    return (
        <div className=''>
            <div className='bg-[#2c2c2c] w-auto h-auto hidden items-center justify-center rounded-full p-4 md:flex'>

                <div className=' grid-cols-3 items-center p-4 hidden md:grid'>
                    <div className='flex flex-col items-center mx-2'>
                        <span className='text-white'>User information</span>
                        <span className='text-gray-500'>Manage your account details</span>
                    </div>
                    <div className='border-l border-gray-700 pl-4'>
                        <div className='flex flex-col items-center'>
                            <span className='text-white'>Notifications</span>
                            <span className='text-gray-500'>View important updates</span>
                        </div>
                    </div>
                    <div className='border-l border-gray-700 pl-4 flex flex-row items-center mx-4'>
                        <div className='flex flex-col items-center'>
                            <span className='text-white'>Airplane Rentals</span>
                            <span className='text-gray-500'>Rent a Plane to fly</span>
                        </div>

                        <Link to={user !== null ? '/AirplaneRent' : ''} className='ml-8 bg-orange-500 rounded-2xl p-4'>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bar;
