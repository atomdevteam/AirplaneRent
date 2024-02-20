import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Calander from './components/Calander/Calander';
import Hours from './components/Hours/Hours';
import LogIn from './components/LogIn/LogIn';
import { useContextAir } from './Context';
import Signln from './Layout/Signln';
import Loader from './components/Loader/Loader';
import Sidebar from './Layout/Sidebar/Sidebar';
import Dashboard from './Layout/Dashboard/Dashboard';
import DashboardLayout from './Layout/AdminDash';
import AircraftDetailsForm from './components/AircraftDetailsForm/AircraftDetailsForm';
import AddAircraftLayout from './Layout/AddAircraftLayout/AddAircraftLayout';
import NotificationsBlock from './components/NotificationsBlock/NotificationsBlock';
import Notifications from './components/Notifications/Notifications'
import Table from './components/Table/Table';
import Logout from './Layout/Logout/Logout';
import Navbar from './components/Navbar/Navbar';
import ProfileDetails from "./components/ProfileDetails/ProfileDetails"
import LayoutNotification from './Layout/LayoutNotification/LayoutNotification';
import HomeScreen from './Layout/HomeScreen/HomeScreen';
import AirplaneRent from './Layout/AirplaneRent/AirplaneRent';
import SidebarRent from "./Layout/AirplaneRent/Sidebar/Sidebar"
import NavBarRent from "./Layout/AirplaneRent/NavBar/NavBar"

//User
import Dashboard1 from './Layout/Dashboard/Dashboard1';
import Sidebar1 from './Layout/Sidebar/Sidebar1'
import ProfileSettings from "./components/ProfileSettings/ProfileSettings"

function App() {
  
  const { user, WhichRole } = useContextAir();
  const userisAuth = localStorage.getItem("Token");
  const navigate = useNavigate();

  const location = useLocation();
  const [showSidebar1, setShowSidebar1] = useState(false);

  useEffect(() => {
    setShowSidebar1(location.pathname !== '/useDashboard' && location.pathname !== '/ProfileSettings'
      && location.pathname !== '/Notifications');
  }, [location.pathname]);

  // useEffect(() => {
  //   if (!userisAuth) {
  //     console.log("Remplazando");
  //     navigate('/', { replace: true });
  //   }
  // }, [userisAuth, navigate]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (userisAuth) {
    if (WhichRole === null) {
      return <Loader />;
    }

    return WhichRole === "user" ? (
      <>
        <div className="flex bg-[#2c2c2c]">
          <Sidebar1 />
          <div className="flex-1  bg-black">
            <Routes>
              <Route path='/' element={<Dashboard1 />} />
              <Route path='/rent' element={<AirplaneRent />} />
            </Routes>
          </div>
        </div>
      </>
      // <Routes>
      //   <Route path="/" element={<HomeScreen />} />
      //   <Route
      //     path="/AirplaneRent/*"
      //     element={
      //       <div className='flex bg-[#2c2c2c]'>
      //         <div className='hidden md:block'>
      //           <Sidebar1 />
      //         </div>
      //         <div className='flex-1  bg-black'>
      //           <Routes>
      //             <Route path='/' element={<Dashboard1 />} />
      //             <Route path='/rent' element={<AirplaneRent />} />
      //           </Routes>
      //         </div>
      //       </div>
      //     }
      //   />
      //   <Route path="/calender" element={<Calander />} />
      //   <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
      // </Routes>
    ) : (
      <>
        <div className="flex bg-[#2c2c2c]">
          {showSidebar1 ? <Sidebar /> : <Sidebar1 />}
          <div className="flex-1 p-4 bg-black">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/ProfileSettings" element={<ProfileSettings />} />
              <Route path="/useDashboard" element={<Dashboard1 />} />
              <Route path='/airdetails' element={<AddAircraftLayout />} />
              <Route path='/notificationsBlock' element={<LayoutNotification />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/table' element={<Table />} />
              <Route path='/profileDetails' element={<ProfileDetails />} />
              <Route path="/calender" element={<Calander />} />
              <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
            </Routes>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          {/* <Route
            path="/AirplaneRent"
            element={
              <div className='flex bg-[#2c2c2c]'>
                <div className='hidden md:block'>
                  <SidebarRent />
                </div>
                {isSidebarOpen && (
                  <div className='md:hidden '>
                    <SidebarRent />
                  </div>
                )}
                <div className='flex-1  bg-black'>
                  <NavBarRent toggleSidebar={toggleSidebar} />
                  <Routes>
                    <Route path='/' element={<AirplaneRent />} />
                    <Route path='/airdetails' element={<AddAircraftLayout />} />
                  </Routes>
                </div>
              </div>
            }
          /> */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Signln" element={<Signln />} />
        </Routes>
      </>

    );
  }
}

export default App;