import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Logout from '../../../Layout/Logout/Logout'
import Hours from '../../../components/Hours/Hours'
import Dashboard from '../../../Layout/Dashboard/Dashboard'
import Calander from '../../../components/Calendar/Calendar'
import AirplaneRent from '../../../Layout/AirplaneRent/AirplaneRent'
import Notifications from '../../../components/Notifications/Notifications'
import ProfileDetails from '../../../components/ProfileDetails/ProfileDetails'
import ProfileSettings from '../../../components/ProfileSettings/ProfileSettings'

//Entry point of the screen that the USER will always see
function index() {

    console.log('UserScreen')

    return (
        <>
            <div className="flex bg-[#2c2c2c]" style={{ flexGrow: 1 }}>
                <Sidebar />
                <div className="flex-grow flex flex-col bg-[#161616]">
                    <Navbar />
                    <Routes>
                        <Route exact path='/logout' element={<Logout />} />
                        <Route exact path='/rent' element={<AirplaneRent />} />
                        <Route exact path="/calender" element={<Calander />} />
                        <Route exact path="/useDashboard" element={<Dashboard />} />
                        <Route exact path="/Notifications" element={<Notifications />} />
                        <Route exact path='/profileDetails' element={<ProfileDetails />} /> {/* As a user i want to be able to see the profile of different users if they allow it */}
                        <Route exact path="/ProfileSettings" element={<ProfileSettings />} />
                        <Route exact path="/hours/:Dia/:Month/:Year" element={<Hours />} />
                        <Route path='*' element={<Navigate to='/useDashboard'/>}/> {/* When none of the permited routes is selected it will redirect to the main route */}
                    </Routes>
                </div>
            </div>
        </>
    )

}

export default index