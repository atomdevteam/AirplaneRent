import { useState, useEffect } from 'react';

function Cards() {
    return (
      <div className="flex flex-wrap justify-center items-center ">
      <div className="flex-grow bg-orange-500 rounded-lg p-2 m-2 text-center max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
        <div className="text-white max-w-[50%] mx-auto whitespace-pre-line">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-sm font-bold">89%</span>
          </div>
          <span className="block text-xs">Aircraft Reservation Progress</span>
        </div>
      </div>
      <div className="flex-grow bg-orange-500 rounded-lg p-2 m-2 text-center max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
        <div className="text-white max-w-[30%] mx-auto whitespace-pre-line">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-sm font-bold">79%</span>
          </div>
          <span className="block text-xs">Frequently Asked Questions</span>
        </div>
      </div>
      <div className="flex-grow bg-orange-500 rounded-lg p-2 m-2 text-center max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
        <div className="text-white max-w-[30%] mx-auto whitespace-pre-line ">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-sm font-bold">48%</span>
          </div>
          <span className="block text-xs">Help & Support</span>
        </div>
      </div>
    </div>  
    )
}

export default Cards