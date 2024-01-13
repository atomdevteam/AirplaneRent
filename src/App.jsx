import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calander from './components/Calander/Calander';
import Hours from './components/Hours/Hours';
import LogIn from './components/LogIn/LogIn';
import { useContextAir } from './Context';
import Signln from './Layout/Signln';
import Loader from './components/Loader/Loader';

function App() {
  const { user } = useContextAir();
  const userisAuth = localStorage.getItem("Token")

  if (userisAuth) {
    return (
      <Routes>
        <Route path="/" element={<Calander />} />
        <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
      </Routes>
    );
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