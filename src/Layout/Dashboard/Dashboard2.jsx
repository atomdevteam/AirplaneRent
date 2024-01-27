import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import Navbar from '../../components/Navbar/Navbar'
import ReserveDetails from '../../components/ReserveDetails/ReserveDetails'
import Cards from '../../components/Cards/Cards'
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails"
import FlightStatistics from "../../components/FlightStatistics/FlightStatistics"
import AdditionalPersonalInformation from "../../components/AdditionalPersonalInformation/AdditionalPersonalInformation"
import AirplaneHistory from "../../components/AirplaneHistory/AirplaneHistory"
import Logbook from "../../components/Logbook/Logbook"
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings'

const Dashboard2 = () => {
  return (
    <div className=''>

      <Navbar />

      <div className="flex flex-col">

        <div className="flex flex-col pt-10 sm:flex-row ">
          <ProfileSettings/>
        </div>


      </div>
    </div>

  )
}

export default Dashboard1