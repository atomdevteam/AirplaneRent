import React from 'react';
//Icon
import { FaArrowLeft } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { IoShieldSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const sidebarItems = [
    { icon: <MdSpaceDashboard color='white' />, text: 'Dashboard' },
    { icon: <FaWallet color='white' />, text: 'Manage payment information' },
    { icon: <IoShieldSharp color='white' />, text: 'Safety and Security' },
    { icon: <IoSettingsSharp color='white' />, text: 'Set your preferences' },
    { icon: <FaBell color='white' />, text: 'Manage notifications' },
    { icon: <BsFillPersonPlusFill color='white' />, text: 'Add additional passengers' },
    { icon: <FaUser color='white' />, text: 'Profile Settings' },
    
];

const Sidebar = () => {
    return (
        <div className="bg-[#2C2C2C] h-screen w-[21rem] text-white p-4">
            <div className="flex flex-col ml-8  mb-8">
                <div className='mb-8 mt-4'>
                    <FaArrowLeft />
                </div>

                <span className="text-lg font-bold">Airplane Rent</span>
            </div>

            <div className="mb-4 ml-8">
                <h2 className="text-sm font-bold mb-1">Rent a plane</h2>
            </div>

            <ul className='ml-8'>
                
                {sidebarItems.map((item, index) => (
                    <li key={index} className="flex items-center mb-4">
                        {item.icon}
                        <span className='ml-4 text-sm text-gray-400'>{item.text}</span>
                    </li>
                ))}
                <li className='flex items-center mt-[8rem]'>
                    <IoLogOutSharp color='white'/>
                    <Link to='/' className='ml-4 text-sm text-gray-400'>Log Out</Link>
                </li>
                
            </ul>
        </div>
    );
};

export default Sidebar;
