import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import Navbar from '../../components/Navbar/Navbar'
import ReserveDetails from '../../components/ReserveDetails/ReserveDetails'
import Cards from '../../components/Cards/Cards'
const Dashboard = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="flex flex-row w-1/2 mb-8">
        <div className='flex flex-col ml-[1rem] '>
          <UserProfile />
          <AircraftReserves />
        </div>
        <div className='flex flex-col'>
          <Cards />
          <ReserveDetails />
        </div>
      </div>
    </div>
  )
}

export default Dashboard