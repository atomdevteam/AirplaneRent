
import React, { useState, useEffect } from 'react';
function PersonalDetails() {

    return (
        <div className="max-w-4xl mx-auto bg-[#2C2C2C] rounded-xl overflow-hidden shadow-md">
        <div className="p-4 pb-6 sm:pb-10">
            <h2 className="text-xl font-bold text-white sm:pl-2">Personal Details</h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center pb-6 sm:pb-10 pl-4 pr-4">
            <div className="aspect-w-16 sm:aspect-w-9 sm:pl-4 aspect-h-9">
                <img
                    className="object-cover object-center w-full h-48 sm:w-48 sm:h-48 rounded-full mx-auto"
                    src="https://th.bing.com/th/id/OIP.pJ2XHzX3eKrXv9st6ZRKhQHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain"
                    alt="Imagen Mediana"
                />
                <p className="text-lg font-semibold text-center mt-2 text-white">John Doe</p>
            </div>
            <div className="p-4 sm:pl-8 text-left flex flex-col">
                <h3 className="text-lg font-semibold text-white">Name</h3>
                <p className="text-lg pb-2 font-semibold sm:pb-4 text-gray-400 overflow-wrap-break-word">Juan</p>
                <h3 className="text-lg font-semibold text-white">Flight Hours</h3>
                <p className="text-lg pb-2 font-semibold sm:pb-4 text-gray-400 overflow-wrap-break-word">12091</p>
                <h3 className="text-lg font-semibold text-white">Bianual Flight Review</h3>
                <p className="text-lg pb-2 font-semibold text-gray-400 overflow-wrap-break-word">1/2/2024</p>
            </div>
            <div className="p-4 sm:pl-8 text-left flex flex-col">
                <h3 className="text-lg font-semibold text-white">Base Airport</h3>
                <p className="text-lg pb-2 font-semibold sm:pb-4 text-gray-400 overflow-wrap-break-word">MDST</p>
                <h3 className="text-lg font-semibold text-white ">Authorized Aircrafts</h3>
                <p className="text-lg pb-2 font-semibold sm:pb-4 text-gray-400 overflow-wrap-break-word">12091</p>
                <h3 className="text-lg font-semibold text-white">Next Flight Review</h3>
                <p className="text-lg pb-2 font-semibold text-gray-400 overflow-wrap-break-word">1/2/2024</p>
            </div>
        </div>
    </div>
    
    


    )
}


export default PersonalDetails