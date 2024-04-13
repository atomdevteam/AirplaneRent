import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSort } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs"
import { IoAirplaneSharp } from 'react-icons/io5';
import LogIn from '../../../components/LogIn/LogIn';
import Signln from '../../Signln';
import { useContextAir } from '../../../Context';

const NavBar = ({ open2, setOpen2, isOpenLogIn, isOpenSignUp, setIsOpenLogIn, setIsOpenSignUp }) => {
  const { user } = useContextAir()
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#2c2c2c] p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Airplane Rent</div>
      <div className="hidden md:flex items-center space-x-4">
        <button onClick={() => setIsOpenLogIn(true)} className="bg-white text-black px-4 py-2 rounded-full hidden md:inline">Log In</button>
        <button onClick={() => setIsOpenSignUp(true)} className="bg-orange-500 text-white px-4 py-2 rounded-full hidden md:inline">Sign Up</button>
        <LogIn isOpen={isOpenLogIn} setIsOpen={setIsOpenLogIn} setIsSignUp={setIsOpenSignUp} />
        <Signln isOpen={isOpenSignUp} setIsOpen={setIsOpenSignUp} setIsLogIn={setIsOpenLogIn} />
      </div>
      <div className="md:hidden">
        <button
          className="text-white"
          onClick={toggleMobileMenu}
        >
          <MdOutlineSort size={30} style={{ transform: 'scaleX(-1)' }} />
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#2c2c2c] py-2 flex flex-row items-center  z-50">
            <button onClick={() => setIsOpenLogIn(true)} className="block text-black px-4 py-2 p-2 m-2 bg-white rounded-full">Log In</button>
            <button onClick={() => setIsOpenSignUp(true)} className="block text-white px-4 py-2 p-2 m-2 bg-orange-500 rounded-full">Sign Up</button>
            <LogIn isOpen={isOpenLogIn} setIsOpen={setIsOpenLogIn} setIsSignUp={setIsOpenSignUp} />
            <Signln isOpen={isOpenSignUp} setIsOpen={setIsOpenSignUp} setIsLogIn={setIsOpenLogIn} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
