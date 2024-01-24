import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import Navbar from '../../components/Navbar/Navbar'
import ReserveDetails from '../../components/ReserveDetails/ReserveDetails'
import Cards from '../../components/Cards/Cards'
import NotificationsBlock from '../../components/NotificationsBlock/NotificationsBlock'
import FilterBlock from '../../components/FilterBlock/FilterBlock'
import  ProfileDetails from '../../components/ProfileDetails/ProfileDetails'
const Dashboard = () => {
  return (
    <div className=''>
      {/* <Navbar />

      <div class="flex flex-row">
        <div className='flex flex-col'>
          <UserProfile />
          <AircraftReserves />
        </div>
        <div className='flex pt-10 flex-col'>
          <Cards />
          <ReserveDetails />
        </div>
      </div> */}

 
        {/* <NotificationsBlock /> */}
        <ProfileDetails></ProfileDetails>
        <NotificationsBlock />
        <div className='flex flex-col'>
          <Cards />
          <ReserveDetails />
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

export default Dashboard