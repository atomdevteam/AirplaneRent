import { createContext, useContext, useState, useEffect } from "react"
import { db, auth } from "./firebase/firebase"
import { set, ref, onValue, get, update, push } from "firebase/database"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"

const Context = createContext()

export const useContextAir = () => {
  const context = useContext(Context)
  if (!context) throw new Error('There is no Context provider')
  return context
}

export function ProviderContext({ children }) {
  //Varibale or state setReservationsForDate
  const [ReservationsForDate, setReservationsForDate] = useState([])
  const [isAuth, setisAuth] = useState(false)
  //Funtions
  const LogIn = async (email, password) => {
    console.log("Backend")

    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        console.log(userCredential)
        user.getIdToken().then((value) => {
          localStorage.setItem("Token", value)
          setisAuth(true)
        })
      })
    } catch (error) {
        console.log(error)
    }
  }

  const logout = async () => {
    console.log("Logout")
    await signOut(auth)
    setisAuth(false)
  }
  const SaveScheduledform = async (datos) => {
    try {
      const newScheduledformRef = push(ref(db, 'Scheduledform'));
      const newScheduledformKey = newScheduledformRef.key;
      await set(newScheduledformRef, datos);
      console.log("Datos guardados correctamente con el ID:", newScheduledformKey);
    } catch (error) {
      console.error("Error al guardar datos:", error);
    }
  }

  const ShowListHours = async (fecha) => {
    try {
      const fetchData = ref(db, 'Scheduledform/');

      // Suscribirse a los cambios en la base de datos
      onValue(fetchData, (snapshot) => {
        const data = snapshot.val();

        // Filtrar las reservaciones por la fecha proporcionada
        const reservationsForDate = Object.values(data || {}).filter(reservation => reservation.date === fecha);

        // Actualizar la visualización con las reservaciones filtradas
        setReservationsForDate(reservationsForDate); // Esta línea depende de cómo gestionas el estado en tu aplicación
      });
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    console.log("Reservaciones")
    console.log(ReservationsForDate)
   
  }, [ReservationsForDate])

  useEffect(() => {
   console.log(isAuth)
  }, [isAuth])
  





  return (
    <Context.Provider
      value={{
        ShowListHours,
        ReservationsForDate,
        SaveScheduledform,
        LogIn,
        isAuth,
        logout
      }}
    >
      {children}
    </Context.Provider>
  )


}