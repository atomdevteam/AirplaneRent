import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2c2c2c] text-white p-4">
            <div className="container ml-[2rem] flex flex-row justify-between">
                <div className=''>
                    <p className='text-xl'>
                        AirplaneRental
                    </p>
                    <p className="text-sm mt-[3rem]">
                        AirplaneRental ©
                    </p>
                </div>
                <div className='mt-[3rem]'>
                    <p className='text-white text-base mb-2'>Help Center</p>
                    <div className='text-gray-400 text-sm'>
                        <p className='mb-2'>How it Works</p>
                        <p>Contact Us</p>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
