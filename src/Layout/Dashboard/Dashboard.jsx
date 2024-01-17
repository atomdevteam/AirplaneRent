import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import Navbar from '../../components/Navbar/Navbar'
import ReserveDetails from '../../components/ReserveDetails/ReserveDetails'
const Dashboard = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <UserProfile />
        <AircraftReserves />
    </div>
  )
}

export default Dashboard