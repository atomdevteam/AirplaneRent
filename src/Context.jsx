import { createContext, useContext, useState, useEffect } from "react"
import { db } from "./firebase/firebase"
import { set, ref, onValue, get, update, push } from "firebase/database"


const Context = createContext()

export const useContextAir = () => {
    const context  = useContext(Context)
    if(!context) throw new Error('There is no Context provider')
    return context
}

export function ProviderContext({children}) {
    //Varibale or state setReservationsForDate
    const [ReservationsForDate, setReservationsForDate] = useState([])
    //Funtions
    const SaveListHour = async () => {
        console.log("Backend")
        let id = 0
        id++
        try {

            set(ref(db, 'ListHours/'), {
              V1: "8:00"
            })

            console.log("Save Data")

        } catch (error) {

            console.log("Error save data")
            console.log(error)
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
      
      


    return (
        <Context.Provider
            value={{
                ShowListHours,
                ReservationsForDate
            }}
        >
            {children}
        </Context.Provider>
    )


}