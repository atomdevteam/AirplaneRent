import React, { useState, useEffect } from 'react';
import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import Calander from "./components/Calander/Calander"
import Hours from './components/Hours/Hours'
import LogIn from './components/LogIn/LogIn'
import { useContextAir } from './Context'
import Signln from './Layout/Signln'

function App() {
  const {user} = useContextAir()
  useEffect(() => {
    console.log("App")
    console.log(user)
  }, [user])

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<Calander />} />
        <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path="/Signln" element={<Signln />} />
      </Routes>
    )
  }

}

export default App