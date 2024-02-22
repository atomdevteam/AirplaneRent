import { Routes, Route } from 'react-router-dom'
import Logout from '../../../Layout/Logout/Logout'
import Hours from '../../../components/Hours/Hours'
import Sidebar1 from '../../../Layout/Sidebar/Sidebar1'
import Calander from '../../../components/Calander/Calander'
import Dashboard1 from '../../../Layout/Dashboard/Dashboard1'
import Notifications from '../../../components/Notifications/Notifications'
import ProfileDetails from '../../../components/ProfileDetails/ProfileDetails'
import ProfileSettings from '../../../components/ProfileSettings/ProfileSettings'
import Navbar from './navbar/Navbar'

//Entry point of the screen that the USER will always see
function index() {

    console.log('UserScreen')
    
    return (
        <div className="flex bg-[#2c2c2c]">
            <Sidebar1 />
            <div className="flex-1  bg-[#161616]">
                <Navbar />
                <Routes>
                    <Route path='/logout' element={<Logout />} />
                    <Route path="/calender" element={<Calander />} />
                    <Route path="/useDashboard" element={<Dashboard1 />} />
                    <Route path="/Notifications" element={<Notifications />} />
                    <Route path='/profileDetails' element={<ProfileDetails />} />
                    <Route path="/ProfileSettings" element={<ProfileSettings />} />
                    <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
                </Routes>
            </div>
        </div>
    )

}

export default index