import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2c2c2c] text-white p-4">
        <div className="container mx-auto md:ml-8 lg:ml-16 flex flex-col md:flex-row justify-between">
      
          <div className='mb-4 md:mb-0'>
            <p className='text-xl'>
              AirplaneRental
            </p>
            <p className="text-sm mt-2 md:mt-3">
              AirplaneRental ©
            </p>
          </div>
      
          <div className='md:mt-0'>
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
