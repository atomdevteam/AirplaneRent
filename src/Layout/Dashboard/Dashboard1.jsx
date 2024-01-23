import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import Navbar from '../../components/Navbar/Navbar'
import ReserveDetails from '../../components/ReserveDetails/ReserveDetails'
import Cards from '../../components/Cards/Cards'
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails"
import FlightStatistics from "../../components/FlightStatistics/FlightStatistics"
const Dashboard1 = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="flex flex-row ">

        <PersonalDetails />
        <FlightStatistics />

      </div>
    </div>

  )
}

export default Dashboard1