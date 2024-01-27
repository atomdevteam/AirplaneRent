import React from 'react'
import { FaHandPaper } from "react-icons/fa";
const ExclusiveDeals = () => {
    return (
        <div className='mt-2 sm:mt-4 lg:mt-6 mb-2 sm:mb-4 lg:mb-6'>
        <div className='w-full bg-[#2c2c2c] p-4 rounded-xl'>
          <div className='flex flex-col sm:flex-row items-center justify-between'>
      
            <div className='flex flex-col sm:flex-row items-center'>
              <FaHandPaper color='white' size={25} />
              <div className='mx-4 sm:mx-8 mt-2 sm:mt-0'>
                <p className='text-white text-lg sm:text-xl font-semibold'>Exclusive Deals</p>
                <p className='text-gray-400'>
                  Join our Airplane Rental Club to receive exclusive offers and the best prices for your next flight!
                </p>
              </div>
            </div>
      
            <div className='mt-4 sm:mt-0'>
              <button className='bg-white p-2 rounded-full'>Sign up for club</button>
            </div>
      
          </div>
        </div>
      </div>
      

    )
}

export default ExclusiveDeals