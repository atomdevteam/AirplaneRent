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
import Logout from './Layout/Logout/Logout';
import Navbar from './components/Navbar/Navbar';

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
    return WhichRole === "user" ? (
      <Routes>
        <Route path="/" element={<Calander />} />
        <Route path="/calender" element={<Calander />} />
        <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
      </Routes>
    ) : (
      <>
        {/* <div className='bg-[#1E1E1E]'>
      <Routes>
            <Route path="/" element={<DashboardLayout/>} />
      </Routes>
     </div> */}
        <div className="flex bg-[#2c2c2c]">
          <Sidebar />
          <div className="flex-1 p-4 bg-black">

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/airdetails' element={<AddAircraftLayout />}/>
              <Route path='/logout' element={<Logout />}/>

            </Routes>
          </div>
        </div>
      </>


    );


  } else {
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Signln" element={<Signln />} />
      </Routes>
    );
  }


  // if (userisAuth) {
  //   if (WhichRole === "user") {
  //     return (
  //       <>

  //       </>
  //     );
  //   } else {
  //     if (WhichRole !== "user") {
  //       return (
  //         <>
  //           {WhichRole !== "user" &&
  //             <div className="flex">
  //               <Sidebar />
  //               <div className="flex-1 p-4 bg-black">
  //                 <Routes>
  //                   <Route path="/" element={<Dashboard />} />
  //                 </Routes>
  //               </div>
  //             </div>
  //           }

  //         </>
  //       )
  //     }

  //   }

  // } else {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<LogIn />} />
  //       <Route path="/Signln" element={<Signln />} />
  //     </Routes>
  //   );
  // }
}

export default App;