import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
import Table from './components/Table/Table';
import Logout from './Layout/Logout/Logout';
import Navbar from './components/Navbar/Navbar';
import ProfileDetails from "./components/ProfileDetails/ProfileDetails"
import LayoutNotification from './Layout/LayoutNotification/LayoutNotification';
import HomeScreen from './Layout/HomeScreen/HomeScreen';
import AirplaneRent from './Layout/AirplaneRent/AirplaneRent';
import SidebarRent from "./Layout/AirplaneRent/Sidebar/Sidebar"
import NavBarRent from "./Layout/AirplaneRent/NavBar/NavBar"
function App() {
  const { user, WhichRole } = useContextAir();
  const userisAuth = localStorage.getItem("Token");
  const navigate = useNavigate();

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

      <Routes>
        <Route path="/" element={<Calander />} />
        <Route path="/calender" element={<Calander />} />
        <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
      </Routes>
    ) : (
      <>
        <div className="flex bg-[#2c2c2c]">
          <Sidebar />

          <div className="flex-1  bg-black">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/airdetails' element={<AddAircraftLayout />} />
              <Route path='/notificationsBlock' element={<LayoutNotification />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/table' element={<Table />} />
              <Route path='/profileDetails' element={<ProfileDetails />} />
            </Routes>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <div className='flex bg-[#2c2c2c]'>
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
            </Routes>
          </div>
        </div> */}

        <Routes>
          <Route
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
                  </Routes>
                </div>
              </div>
            }
          />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Signln" element={<Signln />} />
        </Routes>
      </>

    );
  }
}

export default App;