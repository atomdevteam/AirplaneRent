import { Routes, Route, Navigate } from 'react-router-dom'
import Signln from '../../../Layout/Signln'
import LogIn from '../../../components/LogIn/LogIn'
import HomeScreen from '../../../Layout/HomeScreen/HomeScreen'

function index() {
    console.log('HomeScreen')
    return (
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/LogIn" element={<LogIn />} />
            <Route exact path="/Signln" element={<Signln />} />
            <Route path='*' element={<Navigate to='/'/>}/> {/* When none of the permited routes is selected it will redirect to the main route */}
        </Routes>
    )
}

export default index