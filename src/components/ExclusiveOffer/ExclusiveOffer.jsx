import React from 'react'
import { FaHandPaper } from "react-icons/fa";
const ExclusiveOffer = () => {
    return (
        <div className='ml-4 sm:mt-[6rem] sm:mr-8'>
            <div className='mt-2 sm:mt-4 lg:mt-6 mb-2 sm:mb-4 lg:mb-6'>
                <div className='w-[18rem] bg-[#2c2c2c] p-4 rounded-xl'>
                    <div className='flex flex-col'>
                        <FaHandPaper color='white' size={35} />
                        <div className='mb-8 mt-4'>
                            <p className='text-white text-lg sm:text-xl font-semibold'>Exclusive offer!</p>
                            <p className=' text-gray-400 mt-2'>
                                Join our Airplane Rental Club to receive exclusive offers and the best prices for your next flight!
                            </p>
                        </div>
                        <div className='mt-12 '>
                            <button className='bg-white p-2 rounded-full w-full'>Sign up now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExclusiveOffer