
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-[#2c2c2c] p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Airplane Rent</div>
      <div className="flex items-center space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded-full hidden md:inline">Sign up</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hidden md:inline">Log In</button>
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
