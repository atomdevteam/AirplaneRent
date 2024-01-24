import React from 'react'

const UserProfile = () => {
    return (
        <div className='bg-black w-[50rem] mt-[4rem]'>
            <div className='flex flex-col text-white'>
                <h1 className='text-1xl'>Good morning, Aircraft Owner</h1>
                <span className='text-gray-500 mt-[0.5rem] text-xs'>view you aircraft list and manager reserves</span>
                <div className="mt-[2rem]">
                    <button className="w-[150px] h-[50px] p-[16px, 0px] rounded-full bg-white hover:bg-gray-400 text-black">
                        Add Aircraft
                    </button>
                </div>

                <div className='flex flex-row mt-[2rem]'>
                    <Boxes title="Notifications" subtitle="Profile" linking="Aircraft" />
                    <Boxes title="Reserve Management" subtitle="Maintenace Schedule" linking="Reserve" />
                </div>

            </div>
        </div>
    )
}

const Boxes = ({ title, subtitle, linking }) => {

    return (
        <>
            <div className='bg-gray-900 rounded-xl mr-6 w-[14rem] h-full'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    <h1 className='text-whiye'>{title}</h1>
                    <span className='text-gray-500 mt-[1rem] text-xs'>{subtitle}</span>
                    <div className='flex flex-row items-center mt-4 mb-8'>
                        <div>
                            {/* border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 */}
                            <div className="">
                                <div className="flex">
                                    <img
                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                                        alt="..."
                                        className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow"
                                    />
                                    <img
                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                        alt="..."
                                        className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                    />
                                    <img
                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                                        alt="..."
                                        className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                    />
                                    <img
                                        src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                                        alt="..."
                                        className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='ml-8 text-xs'>
                            {linking}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile