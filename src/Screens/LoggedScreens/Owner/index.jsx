import { Routes, Route } from 'react-router-dom'
import Table from '../../../components/Table/Table'
import Sidebar from '../../../Layout/Sidebar/Sidebar'
import Dashboard from '../../../Layout/Dashboard/Dashboard'
import Dashboard1 from '../../../Layout/Dashboard/Dashboard1'
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
                    <Route path="/" element={<Dashboard />} /> 
                    <Route path='/' element={<Dashboard1 />} />
                    <Route path='/table' element={<Table />} /> 
                    <Route path='/rent' element={<AirplaneRent />} />
                    <Route path='/airdetails' element={<AddAircraftLayout />} /> 
                    <Route path='/notificationsBlock' element={<LayoutNotification />} /> 
                </Routes>
            </div>
        </div>
    )

}

export default index