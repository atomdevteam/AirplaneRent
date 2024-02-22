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


import OwnerScreen from './Screens/LoggedScreens/Owner/index'
import UserScreen from './Screens/LoggedScreens/User/index'
import PublicHomeScreen from './Screens/PublicScreens/Home/index'

function App() {

  const { WhichRole } = useContextAir();
  const userisAuth = localStorage.getItem("Token");

  if (userisAuth) {

    if (WhichRole === null) {
      return <Loader />
    }

    return WhichRole === "user" ? (
        <UserScreen />
    ) : (
        <OwnerScreen />
    )

  } else {
    return (
      <PublicHomeScreen/>
    );
  }
}

export default App;