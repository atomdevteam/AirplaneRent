import { Routes, Route } from 'react-router-dom'
import Signln from '../../../Layout/Signln'
import LogIn from '../../../components/LogIn/LogIn'
import HomeScreen from '../../../Layout/HomeScreen/HomeScreen'

function index() {
    console.log('HomeScreen')
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Signln" element={<Signln />} />
        </Routes>
    )
}

export default index