import { Routes, Route, Navigate } from 'react-router-dom'

import Logout from '../../../Layout/Logout/Logout'
import Table from '../../../components/Table/Table'
import Sidebar from '../../../Layout/Sidebar/Sidebar'
import Dashboard from '../../../Layout/Dashboard/Dashboard'
import AirplaneRent from '../../../Layout/AirplaneRent/AirplaneRent'
import AddAircraftLayout from '../../../Layout/AddAircraftLayout/AddAircraftLayout'
import LayoutNotification from '../../../Layout/LayoutNotification/LayoutNotification'

//Entry point of the screen that the OWNER will always see
function index() {

    console.log('OwnerScreen')

    return (
        <div className="flex bg-[#2c2c2c]">
            <Sidebar />
            <div className="flex-1 p-4 bg-black">
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path='/table' element={<Table />} />
                    <Route exact path='/logout' element={<Logout />} />
                    <Route exact path='/rent' element={<AirplaneRent />} />
                    <Route exact path='/airdetails' element={<AddAircraftLayout />} />
                    <Route exact path='/notificationsBlock' element={<LayoutNotification />} />
                    <Route path='*' element={<Navigate to='/'/>}/> {/* When none of the permited routes is selected it will redirect to the main route */}
                </Routes>
            </div>
        </div>
    )

}

export default index