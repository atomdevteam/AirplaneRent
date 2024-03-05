import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import { FaHeart } from "react-icons/fa6"
import { IoMdAddCircle } from "react-icons/io";
import { useState } from 'react';

const AircraftsCards = ({name,tipo,image,precioH}) => {

    return (
        <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
            <img src={image} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />

            <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
            <div className="px-1 py-4">
                <div className="text-white">{name}</div>
                <p className="text-gray-400 text-base">
                    {tipo}
                </p>
            </div>
            <div className="px-1 flex items-center justify-between">
                <span className='text-white'>from ${precioH}</span>
                <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
            </div>


        </div>

    )
}

export default AircraftsCards
