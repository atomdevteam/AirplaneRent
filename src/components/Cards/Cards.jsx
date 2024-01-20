import { useState, useEffect } from 'react';

function Cards() {
  return (

    <div className="flex justify-center items-center space-x-4 pt-28 pb-8">
      <div className="bg-orange-500 rounded-lg p-3 text-center w-36 h-40">
        <div className="text-white h-full flex flex-col justify-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-lg font-bold">89%</span>
          </div>
          <span className="block text-xs">Aircraft Reservation Progress</span>
        </div>
      </div>
      <div className="bg-orange-500 rounded-lg p-3 text-center w-36 h-40">
        <div className="text-white h-full flex flex-col justify-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-lg font-bold">79%</span>
          </div>
          <span className="block text-xs">Frequently Asked Questions</span>
        </div>
      </div>
      <div className="bg-orange-500 rounded-lg p-3 text-center w-36 h-40">
        <div className="text-white h-full flex flex-col justify-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-lg font-bold">48%</span>
          </div>
          <span className="block text-xs">Help & Support</span>
        </div>
      </div>
    </div>


  )
}

export default Cards