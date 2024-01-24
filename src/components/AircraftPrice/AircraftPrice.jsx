import React from 'react'

const AircraftPrice = () => {
    return (
        <div className='mt-[2rem]'>
            <div className='bg-[#2c2c2c] rounded-xl mr-6  h-auto'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    <h1 className='text-white mt-4'>Aircraft Price</h1>
                    <span className='text-white mt-[1rem] text-lg'>Amount</span>
                    <div className="container mx-auto mt-8">
                        <form className='mb-8'>
                            <div>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-white">
                                        $ 
                                    </span>
                                    <input
                                        type="number"
                                        name="Amount"
                                        className="py-3 pl-10 pr-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
                                    />
                                </div>

                            </div>
                        </form>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default AircraftPrice