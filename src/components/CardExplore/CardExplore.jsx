// src/components/CardExplore.js

import React from 'react';
import aircraft from '../../assets/aircraft.jpg';
import Bar from '../Bar/Bar'

const CardExplore = () => {
    return (
        <div className=''>
            <div className="relative">
                <div
                    className="bg-cover bg-center text-white text-center relative rounded-xl"
                    style={{
                        backgroundImage: `url(${aircraft})`,
                        height: '300px',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">
                                Explore Our Airplane Rental Services
                            </h1>
                            <p className="text-lg">
                                Choose from a wide range of airplanes for your next flight!
                            </p>
                        </div>
                    </div>
                </div>




            </div>
            <div className='flex justify-center'>
                <Bar />
            </div>

        </div>
    );
};

export default CardExplore;
