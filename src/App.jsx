import { Outlet, Route, Routes } from 'react-router-dom'
import Calander from "./components/Calander/Calander"
import Hours from './components/Hours/Hours'

function App() {

  return (
    <>
      <Routes>
        <Route>
          <Route path="" element={<Calander />} />
          <Route path="/hours/:Dia" element={<Hours />} />
        </Route>
      </Routes>
    </>
  )
}

export default App