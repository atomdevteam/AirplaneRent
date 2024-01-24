import React, { useState, useEffect } from 'react'
import { IoMdNotifications } from "react-icons/io";
import TableDetails from '../TableDetails/TableDetails'
function ProfileDetails() {
    return (
        <>
            <div className="flex items-center bg-black p-4 rounded-md shadow-md relative">
                <div className='p-6'>
                    <img
                        src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                        className="w-40 h-40 rounded-lg mr-2"
                    />
                </div>

                <div>
                    <div className="flex items-center">
                        <h2 className="text-xl  text-white  pr-10">John</h2>
                        <button className="bg-white  text-black px-4 py-2 rounded-full">Edit Profile</button>
                    </div>
                    <div className='flex flex-row mt-4'>
                        <p className="text-gray-400 text-sm">30 Reserves</p>
                        <p className="text-gray-400 text-sm ml-8">10 Aircraft</p>
                    </div>

                </div>

                {/* Textos en la esquina derecha */}
                <div className="absolute top-0 right-0 flex flex-row pt-5 pr-10">
                    <button >< IoMdNotifications className="text-sm text-gray-500 mr-5" size={25} color='white' /></button>
                    <img
                        src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                        className="w-10 h-10 rounded-full "
                    />
                </div>
            </div>
            <TableDetails></TableDetails>
        </>
    );
}




export default ProfileDetails