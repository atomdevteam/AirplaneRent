import React from 'react'
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import { IoMdHome, IoMdSearch, IoMdAdd, IoMdNotifications, IoMdPerson, IoMdSettings } from "react-icons/io";
import { useContextAir } from '../../Context';
import { useNavigate, Link } from 'react-router-dom';
const generalRoutes = [
    {
        name: 'Dashboard',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512" fill="#ffffff"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>,
        route: '/useDashboard'
    },
    {
        name: 'Search',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill="#ffffff"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>,
        route: '/search'
    },
    {
        name: 'Add Aircraft',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" fill="#ffffff"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>,
        route: '/airdetails'
    }
]

const personalRoutes = [
    {
        name: 'Notification',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" fill="#ffffff"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>,
        route: '/notificationsBlock'
    },
    {
        name: 'Profile',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" fill="#ffffff"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>,
        route: '/profileDetails'
    }
]

const settingsRoutes = [
    {
        name: 'Settings',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill="#ffffff"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" /></svg>,
        route: '/'
    },
    {
        name: 'Log Out',
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" fill="#ffffff"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>,
        route: '/logout'
    }
]

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
        <div className="flex flex-col ">

            <div className="w-[12rem] h-screen bg-[#2C2C2C] rounded-tr-[1.5rem] rounded-br-[1.5rem]">

                <div className="flex items-center justify-center mt-10">
                    <p className="text-white font-bold text-[2rem]">Aircraft X</p>
                </div>
                <div className="mt-5 flex flex-col flex-grow h-[85%]">
                    {/* General Routes */}
                    <div className="flex-none">
                        {generalRoutes.map((route) => (
                            <Link to={route.route}  key={route.name} className="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer hover:bg-gray-700 hover:text-gray-100 focus:outline-none">
                                <span className=" flex items-center">
                                    {route.icon}
                                    {/* <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg> */}
                                    <span className="mx-4 font-medium">{route.name}</span>
                                </span>
                            </Link>
                        ))}
                    </div >

                    {/* Personal Routes */}
                    <div className="flex-grow mt-8">
                        {personalRoutes.map((route) => (
                            <Link to={route.route} key={route.name} className="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer hover:bg-gray-700 hover:text-gray-100 focus:outline-none">
                                <span className=" flex items-center">
                                    {route.icon}
                                    {/* <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                         <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                     </svg> */}
                                    <span className="mx-4 font-medium">{route.name}</span>
                                </span>
                            </Link>
                        ))}
                    </div >

                    {/* Settings Routes */}
                    <div className="flex-none">
                        {settingsRoutes.map((route) => (
                            <Link to={route.route} key={route.name} className="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer hover:bg-gray-700 hover:text-gray-100 focus:outline-none">
                                <span className="ml-8 flex items-center">
                                    {route.icon}
                                    {/* <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                     <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                 </svg> */}
                                    <span className="mx-4 font-medium">{route.name}</span>
                                </span>
                            </Link>
                        ))}
                    </div >
                </div >
            </div >

        </div >

        // <div className="bg-gray-900 h-screen w-[14rem] p-4 text-white">
        //     <div className="mb-4 text-xl font-bold mt-[2rem]">Aircraft X</div>
        //     <ul className='mt-[2rem]'>
        //         <SidebarItem icon={<IoMdHome />} name="Dashboard" />
        //         <SidebarItem icon={<IoMdSearch />} name="Search" />
        //         <SidebarItem icon={<IoMdAdd />} name="Add Aircraft" />
        //         <SidebarItem icon={<IoMdNotifications />} name="Notification" />
        //         <SidebarItem icon={<IoMdPerson />} name="Profile" />
        //     </ul>

        //     <div className=" absolute bottom-0 left-0  mb-2 w-[14rem] p-2 rounded">
        //         <ul>
        //             <SidebarItem icon={<IoMdSettings />} name="Settings" />
        //             <SidebarItem icon={<IoMdPerson />} name="Log Out" onClick={handleLogout} />
        //         </ul>
        //     </div>
        // </div>

    )
}

export default Sidebar