// Card.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ title, imageUrl }) => {
    return (
        <div className="bg-transparent p-4 shadow-md rounded-md text-white">
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4 rounded-md" />
            <div className='flex flex-row items-center justify-between'>
                <span className='text-sm'>Aircraft - 3600</span>
                <button className='bg-orange-500 text-sm rounded-full px-2 py-1'>Rent</button>
            </div>
            <div className='flex flex-row items-center mt-2'>
                <FaStar className='text-white' />
                <span className='ml-2'>3.5</span>
            </div>
        </div>
    );
};

export default Card;
