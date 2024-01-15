import { Outlet, Route, Routes } from 'react-router-dom'
import Calander from "./components/Calander/Calander"
import Hours from './components/Hours/Hours'
import AdminDash from './layout/AdminDash'

function App() {

  return (
    <>
      <Routes>
        <Route>
          <Route path="" element={<Calander />} />
          <Route path="/admindash" element={<AdminDash/>} />
          <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
        </Route>
      </Routes>
    </>
  )
}

export default App