import React, { useState } from 'react';
function Logbook() {

    return (
        <div className="w-1/2 rounded-xl overflow-hidden shadow-md   ">
            <div className="flex items-center justify-center w-full rounded-t-lg  bg-[#2C2C2C] p-4">
                <div className="text-white bg-orange-400 rounded-full px-4">More personal information</div>
            </div>
            <div className="w-full flex bg-black pt-2 pb-6  items-center justify-center h-1/2 rounded-none">

            </div>
            <div className="w-full rounded-b-lg flex bg-[#2C2C2C] p-6  items-center justify-center mt-6">
                {/* <div className="text-white bg-orange-500 rounded-md px-4 flex items-center justify-center">More personal information</div> */}
            </div>


        </div>


    );
}

export default Logbook