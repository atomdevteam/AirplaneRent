import { Outlet, Route, Routes } from 'react-router-dom'
import Calander from "./components/Calander/Calander"
import Hours from './components/Hours/Hours'
import Signln from './Layout/Signln'

function App() {

  return (
    <>
      <Routes>
        <Route>
          {/* <Route path="" element={<Calander />} /> */}
          <Route path="" element={<Signln />} />
          <Route path="/hours/:Dia/:Month/:Year" element={<Hours />} />
        </Route>
      </Routes>
    </>
  )
}

export default App