import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Calander from './components/Calander/Calander';
import Hours from './components/Hours/Hours';
import LogIn from './components/LogIn/LogIn';
import { useContextAir } from './Context';
import Signln from './Layout/Signln';
import Loader from './components/Loader/Loader';
import Sidebar from './Layout/Sidebar/Sidebar';


function App() {
  const { user, WhichRole } = useContextAir();
  const userisAuth = localStorage.getItem("Token")
  console.log(!!userisAuth)
  console.log(WhichRole !== "user")

  const navigate = useNavigate();

  useEffect(() => {
    if (!userisAuth) {
      console.log("Remplazando");
      navigate('/', { replace: true });
    }
  }, [userisAuth, navigate]);


  if (userisAuth) {
    if (WhichRole !== "user") {
      return (
        <>
          {/* {WhichRole !== "user" && <Navigate to='/aircraft' replace />} */}
          <Sidebar />
        </>
      )
    } else {
      return (
        <Routes>
          <Route path="/" element={<Calander />} />
          <Route path="/calender" element={<Calander />} />
          <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
        </Routes>
      );
    }

  } else {
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Signln" element={<Signln />} />
      </Routes>
    );
  }
}

export default App;