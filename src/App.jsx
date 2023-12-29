import React, { useState, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom'
import Calander from "./components/Calander/Calander"
import Hours from './components/Hours/Hours'
import LogIn from './components/LogIn/LogIn'
import { useContextAir } from './Context'
import NavBar from './components/NavBar'
import Signln from './Layout/Signln'

function App() {
  const { isAuth } = useContextAir()

  useEffect(() => {
  console.log("App")
  console.log(isAuth)
  }, [isAuth])
  

  return (
    <Routes>
      {isAuth ? (
        <Route path='/' element={<Calander />} />
        
      ) : (
        <Route path='/' element={<LogIn />} />
      )}
      <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
    </Routes>
  );


}

export default App