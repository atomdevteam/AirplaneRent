import { useContextAir } from './Context'

import Loader from './components/Loader/Loader'
import UserScreen from './Screens/LoggedScreens/User/index'
import OwnerScreen from './Screens/LoggedScreens/Owner/index'
import PublicHomeScreen from './Screens/PublicScreens/Home/index'

function App() {

  const { WhichRole } = useContextAir()
  const userisAuth = localStorage.getItem("Token")

  return(
    userisAuth ? WhichRole == null ? <Loader/> : //If role is null the following line will be executed
    WhichRole == 'user' ? <UserScreen/> : <OwnerScreen/> //If user is Auth and Role is User display UserScreens if not display OwnerScreen
    : <PublicHomeScreen/> //If user is not Authenticated this component will be displayed
  )

}

export default App;