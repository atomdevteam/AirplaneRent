import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import AircraftDetailsForm from '../../components/AircraftDetailsForm/AircraftDetailsForm'
const Dashboard = () => {
  return (
    <div className='flex flex-col'>

      <UserProfile />
      <AircraftReserves />
    </div>
  )
}

export default Dashboard