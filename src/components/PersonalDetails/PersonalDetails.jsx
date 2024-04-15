
import React, { useState, useEffect } from 'react';
import { useContextAir } from '../../Context';
import userAvatar from '../../assets/userAvatar.svg'
import { FaUserCircle } from "react-icons/fa";
function PersonalDetails() {
    const { user, InforPerfil } = useContextAir()
    const [Picture, setPicture] = useState(InforPerfil?.Photo)

    return (
        <div className="w-1/2 mr-4 bg-[#2C2C2C] rounded-xl overflow-hidden shadow-md">
            <div className="m-4">
                <h2 className="text-xl font-bold text-white sm:pl-2">Personal Details</h2>
            </div>
            <div className=' flex flex-col sm:flex-row items-center ml-4'>
                <div className="aspect-w-16 sm:aspect-w-9  aspect-h-9 ">
                    {Picture === null ? (
                        <img
                            src={Picture}
                            alt='Profile'
                            className='object-cover object-center w-full h-48 sm:w-48 sm:h-48 rounded-full'
                        />
                    ) : (<FaUserCircle color='gray' className='object-cover object-center w-full h-48 sm:w-48 sm:h-48 rounded-full' />

                    )}
                    <p className=" font-semibold text-center mt-2 text-white">{InforPerfil?.name}</p>
                </div>
                <div className="ml-4  mr-2 text-left flex flex-col text-sm ">
                    <span className=" font-semibold text-white">Name</span>
                    <p className="mb-8 pb-2 font-semibold sm:pb-4 text-gray-400 overflow-wrap-break-word">{InforPerfil?.name}</p>
                    <span className=" font-semibold text-white">Flight Hours</span>
                    <p className="mb-8 pb-2 font-semibold sm:pb-4 text-gray-400 overflow-wrap-break-word">12091</p>
                    <span className=" font-semibold text-white">Bianual Flight Review</span>
                    <p className=" pb-2 font-semibold text-gray-400 overflow-wrap-break-word">1/2/2024</p>
                </div>
                <div className=" text-left flex flex-col text-sm ml-4">
                    <span className=" font-semibold text-white">Base Airport</span>
                    <p className="mb-8  pb-2 font-semibold sm:pb-4 text-gray-400 overflow-wrap-break-word">MDST</p>
                    <span className=" font-semibold text-white ">Authorized Aircrafts</span>
                    <p className="mb-8 pb-2 font-semibold sm:pb-4 text-gray-400 overflow-wrap-break-word">12091</p>
                    <span className=" font-semibold text-white">Next Flight Review</span>
                    <p className=" pb-2 font-semibold text-gray-400 overflow-wrap-break-word">1/2/2024</p>
                </div>
            </div>
        </div>
    )
}


export default PersonalDetails