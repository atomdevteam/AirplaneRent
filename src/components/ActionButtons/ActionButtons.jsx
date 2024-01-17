import React from 'react'

const ActionButtons = () => {
    return (
        <div className='mt-[2rem]'>
            <div className='bg-[#2c2c2c] rounded-xl mr-6  h-auto'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    {/* <h1 className='text-white mt-4'>Aircraft Price</h1>
                    <span className='text-white mt-[1rem] text-lg'>Amount</span> */}
                    <div className="container mx-auto mt-8">
                        <div className='flex flex-col mx-8'>
                            <button className='bg-orange-400 mb-4 text-white rounded-full h-12 '>
                                Publish Now
                            </button>
                            <button className='bg-white mb-8 text-black rounded-full h-12'>
                                Schedule Aircraft
                            </button>
                            <button className='bg-transparent mb-8 text-white rounded-full h-12'>
                                Save Draft
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionButtons