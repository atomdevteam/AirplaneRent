import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import Navbar from '../../components/Navbar/Navbar'
import ReserveDetails from '../../components/ReserveDetails/ReserveDetails'
import Cards from '../../components/Cards/Cards'
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails"
const Dashboard1 = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="flex flex-row w-1/2">
        <div className='flex flex-col ml-[1rem] '>
          <PersonalDetails />
        </div>
        <div className='flex flex-col'>
       
        </div>
      </div>
    </div>
    // <div className='flex flex-col'>
    //     <Navbar/>

    //     <UserProfile />
    //     <AircraftReserves />
    // </div>
    // <div className='flex flex-col'>
    //     <Navbar/>
    //     <UserProfile />
    //     <AircraftReserves />
    // </div>
  )
}

export default Dashboard1