import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import NavBar from './NavBar/NavBar'
import ListAircraft from './ListAircraft/ListAircraft';
import ExclusiveOffer from '../../components/ExclusiveOffer/ExclusiveOffer';
import NavBarRent from './NavBar/NavBar'
const AirplaneRent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (

    <div className=''>
      <NavBarRent toggleSidebar={toggleSidebar} />
      <div className='flex flex-col-reverse sm:flex-row'>
        <ListAircraft />
        <ExclusiveOffer />
      </div>

    </div>
  )
}

export default AirplaneRent

