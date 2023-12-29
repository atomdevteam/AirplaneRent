import { createContext, useContext, useState, useEffect } from "react"
import { db } from "./firebase/firebase"
import { set, ref,query, orderByChild, equalTo, onValue, get, update, push, remove } from "firebase/database"


const Context = createContext()

export const useContextAir = () => {
    const context  = useContext(Context)
    if(!context) throw new Error('There is no Context provider')
    return context
}

export function ProviderContext({children}) {
    //Varibale or state setReservationsForDate
    const [ReservationsForDate, setReservationsForDate] = useState([])
    const [AllReservations, setAllReservations] = useState([])
    //Funtions
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

    const DeleteScheduleById = async (idToDelete) => {
      try {
        const scheduledformsRef = ref(db, 'Scheduledform');
        const queryById = query(scheduledformsRef, orderByChild('id'), equalTo(idToDelete));
        const snapshot = await get(queryById);
    
        if (snapshot.exists()) {
          const key = Object.keys(snapshot.val())[0]; // Obtener la clave del elemento
          const elementRef = ref(db, `Scheduledform/${key}`);
          await remove(elementRef);
          console.log("Elemento eliminado correctamente");
        } else {
          console.log("No se encontró ningún elemento con la ID proporcionada");
        }
      } catch (error) {
        console.error("Error al eliminar elemento:", error);
        throw error;
      }
    }

    const EditScheduleById = async (idToEdit, newData) => {
      try {
        const scheduledformsRef = ref(db, 'Scheduledform');
        const queryById = query(scheduledformsRef, orderByChild('id'), equalTo(idToEdit));
        const snapshot = await get(queryById);
    
        if (snapshot.exists()) {
          const key = Object.keys(snapshot.val())[0]; // Obtener la clave del elemento
          const elementRef = ref(db, `Scheduledform/${key}`);
          await update(elementRef, newData); // Actualizar los datos del elemento
          console.log("Elemento editado correctamente");
        } else {
          console.log("No se encontró ningún elemento con la ID proporcionada");
        }
      } catch (error) {
        console.error("Error al editar elemento:", error);
        throw error;
      }
    }
    

    const ShowListHours = async (fecha) => {
        try {
          const fetchData = ref(db, 'Scheduledform/');
          onValue(fetchData, (snapshot) => {
            const data = snapshot.val();
            const reservationsForDate = Object.values(data || {}).filter(reservation => reservation.date === fecha);
            const All = Object.values(data || {});
            setReservationsForDate(reservationsForDate); 
            setAllReservations(All)
          });
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      };

      useEffect(() => {
        console.log("Reservaciones")
        console.log(ReservationsForDate)
        console.log("Todas....")
        console.log(AllReservations)
      }, [ReservationsForDate, AllReservations])
      
      


      
    return (
        <Context.Provider
            value={{
                ShowListHours,
                ReservationsForDate,
                AllReservations,
                SaveScheduledform,
                DeleteScheduleById,
                EditScheduleById
            }}
        >
            {children}
        </Context.Provider>
    )


}