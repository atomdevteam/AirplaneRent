// src/screens/HomeScreen.js

import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import CardExplore from '../../components/CardExplore/CardExplore';
import Bar from '../../components/Bar/Bar';
import Populardestinations from '../../components/PopularDestinations/Populardestinations';
import Topairplanes from '../../components/Topairplanes/Topairplanes';
import ExclusiveDeals from '../../components/ExclusiveDeals/ExclusiveDeals';
import Footer from '../../components/Footer/Footer';
import { useContextAir } from '../../Context';
const HomeScreen = () => {
  const { logout } = useContextAir()
  const [open2, setOpen2] = useState(false);

  const [isOpenLogIn, setIsOpenLogIn] = useState(false)
  const [isOpenSignUp, setIsOpenSignUp] = useState(false)

  const handleLogout = (e) => {
    e.preventDefault()
    console.log("Logout")
    logout()
    localStorage.clear();
    window.location.reload();

    return (
      <Navigate to='/' replace />
    )
  }
  return (
    <div className="bg-black relative">
      <NavBar
        open2={open2}
        setOpen2={setOpen2}
        isOpenLogIn={isOpenLogIn}
        isOpenSignUp={isOpenSignUp}
        setIsOpenLogIn={setIsOpenLogIn}
        setIsOpenSignUp={setIsOpenSignUp}
      />
      <div className="flex flex-col mt-6 mx-12 w-auto">
        <CardExplore   setIsOpenLogIn={setIsOpenLogIn}/>
        <Populardestinations />
        <Topairplanes />
        <ExclusiveDeals />
      </div>
      <Footer />
      <div
        className="absolute top-6 right-3"
      >
        <div className="flex gap-3 items-center user cursor-pointer"

        >
          <div
            style={open2 ? { display: 'block' } : { display: 'none' }}
            className="drop-down w-48 overflow-hidden bg-black border-solid border-2 border-sky-500 drop-shadow-md absolute top-12 right-3"
          >
            <ul>
              <li className="px-3 py-3 text-md font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span
                  className="text-white"
                  onClick={handleLogout}
                >
                  Log Out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div className='bg-black'>
    //   <NavBar />
    //   <div className='flex flex-col mt-6 mx-12 w-auto'>
    //     <CardExplore />
    //     <Populardestinations />
    //     <Topairplanes />
    //     <ExclusiveDeals />
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default HomeScreen;
