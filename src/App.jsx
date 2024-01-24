import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Calander from './components/Calander/Calander';
import Hours from './components/Hours/Hours';
import LogIn from './components/LogIn/LogIn';
import { useContextAir } from './Context';
import Signln from './Layout/Signln';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar'
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

  if (userisAuth) {
    if (WhichRole === null) {
      // Muestra un indicador de carga mientras se obtiene la información del usuario
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
              <Route path='/notificationsBlock' element={<LayoutNotification/>} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/table' element={<Table />} />
              <Route path='/profileDetails' element={<ProfileDetails/>}/>
            </Routes>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Signln" element={<Signln />} />
        </Routes>
      </>

    );
  }
}

export default App;
