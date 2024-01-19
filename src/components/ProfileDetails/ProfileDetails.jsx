import React, { useState, useEffect } from 'react'
import { IoMdNotifications } from "react-icons/io";
import  TableDetails from '../TableDetails/TableDetails'
function ProfileDetails() {
    return (
        <>
        <div className="flex items-center bg-gray-900 p-4 rounded-md shadow-md relative">
            <img
                src={"https://gestion.pe/resizer/F3cNy8c2XPes1b3rCW9_QxS4_dE=/940x569/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DS7R4ETDHFFUNAFCKI3BXXUFHU.jpg"}
                className="w-40 h-40 rounded-lg mr-4"
            />
            <div>
                <div className="flex items-center">
                    <h2 className="text-xl font-bold text-white mr-2 pr-10">John</h2>
                    <button className="bg-white  text-black px-4 py-2 rounded-full">Edit Profile</button>
                </div>
                <p className="text-white">30 Reserves</p>
            </div>

            {/* Textos en la esquina derecha */}
            <div className="absolute top-0 right-0 flex flex-row pt-5 pr-10">
                <button >< IoMdNotifications className="text-sm text-gray-500" size={25} color='white'/></button>
                <img
                     src={"https://gestion.pe/resizer/F3cNy8c2XPes1b3rCW9_QxS4_dE=/940x569/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DS7R4ETDHFFUNAFCKI3BXXUFHU.jpg"}
                    className="w-10 h-10 rounded-full "
                />
            </div>
        </div>
        <TableDetails></TableDetails>
        </>
    );
}




export default ProfileDetails