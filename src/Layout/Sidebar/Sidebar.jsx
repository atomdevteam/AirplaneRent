import React from 'react'
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import { IoMdHome, IoMdSearch, IoMdAdd, IoMdNotifications, IoMdPerson, IoMdSettings } from "react-icons/io";
import { useContextAir } from '../../Context';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const { logout } = useContextAir()
    const history = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        console.log("Logout")
        logout()
        localStorage.clear();
        window.location.reload();
        history('/');

      
    }
    return (
        <>
            <div className="bg-gray-900 h-screen w-[14rem] p-4 text-white">
                <div className="mb-4 text-xl font-bold mt-[2rem]">Aircraft X</div>
                <ul className='mt-[2rem]'>
                    <SidebarItem icon={<IoMdHome />} name="Dashboard" />
                    <SidebarItem icon={<IoMdSearch />} name="Search" />
                    <SidebarItem icon={<IoMdAdd />} name="Add Aircraft" />
                    <SidebarItem icon={<IoMdNotifications />} name="Notification" />
                    <SidebarItem icon={<IoMdPerson />} name="Profile" />
                </ul>

                <div className=" absolute bottom-0 left-0  mb-2 w-[14rem] p-2 rounded">
                    <ul>
                        <SidebarItem icon={<IoMdSettings />} name="Settings" />
                        <SidebarItem icon={<IoMdPerson />} name="Log Out" onClick={handleLogout} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar