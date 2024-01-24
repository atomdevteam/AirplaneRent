import React from 'react'
import { FaHandPaper } from "react-icons/fa";
const ExclusiveDeals = () => {
    return (
        <div className='mt-[2rem] mb-[2rem]'>
            <div className='w-full bg-[#2c2c2c] p-4 rounded-xl'>
                <div className='flex flex-row items-center justify-between'>

                    <div className='flex flex-col '>
                        <div className='flex flex-row  items-center'>
                            <FaHandPaper color='white' size={25} />
                            <div className='flex flex-col mx-8'>
                                <span className='text-white'>Exclusive Deals</span>
                                <span className='text-gray-400'>
                                    John our AirplaneRental Club to receive exclusive offers and the best prices for you next flight!
                                </span>
                            </div>
                        </div>


                    </div>
                    <div>
                        <button className='bg-white p-2 rounded-full'>Sign up for club</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ExclusiveDeals