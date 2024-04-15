import React from 'react'
import { Link } from 'react-router-dom'
import { useContextAir } from '../../Context'
const UserProfile = () => {
    const {WhichRole} = useContextAir()
    return (
        <div className='bg-black  mt-[4rem]'>
            <div className='flex flex-col text-white'>
                <h1 className='text-3xl font-bold text-white mb-2'>Good morning, Aircraft {WhichRole}</h1>
                <span className='text-gray-500 mt-[0.5rem] text-sm'>view you aircraft list and manager reserves</span>
                <div className="mt-[2rem]">
                    {/* <button className="w-[150px] h-[50px] p-[16px, 0px] rounded-full bg-white hover:bg-gray-400 text-black">
                        Add Aircraft
                    </button> */}
                    <Link to='/airdetails'  className="bg-white text-black px-4 py-2 rounded-full mb-2 inline-block text-sm w-30">
                        Add Aircraft
                    </Link>

                    {/* <Link to='/airdetails' className="bg-white text-black px-4 py-2 rounded-full mb-6 inline-block w-80 h-80">
                        Add Aircraft
                    </Link> */}
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
            <div className='bg-[#2c2c2c] rounded-xl mr-6 w-[14rem] h-full'>
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