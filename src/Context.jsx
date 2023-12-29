import { createContext, useContext, useState, useEffect } from "react"
import { db,auth } from "./firebase/firebase"
import { set, ref, onValue, get, update, push,getDatabase } from "firebase/database"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { toast } from "react-toastify"
const Context = createContext()
//123456789
export const useContextAir = () => {
    const context  = useContext(Context)
    if(!context) throw new Error('There is no Context provider')
    return context
}

export function ProviderContext({children}) {
    //Varibale or state setReservationsForDate
    const [ReservationsForDate, setReservationsForDate] = useState([])
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
      
      async function saveUserDetails(email, userDetails) {
        const db = getDatabase();
        const userRef = ref(db, 'users/' + email.replace('.', ',')); // Usando el correo electrónico como clave, reemplazando '.' con ','
      
        try {
          await set(userRef, userDetails);
          console.log('Detalles del usuario guardados correctamente en la base de datos');
        } catch (error) {
          console.error('Error al guardar detalles del usuario:', error.message);
        }
      }
      
      const signup = async (email, password,name,phonenumber) => {
        // Validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          console.error("Error: El formato del correo electrónico no es válido");
          return;
        }
      
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("Usuario registrado exitosamente");
        
          // Guardar detalles adicionales del usuario en la base de datos
          await saveUserDetails(email, { name, phonenumber });
        
        } catch (error) {
          // Manejar errores específicos
          if (error.code === "auth/weak-password") {
            console.error("Error: La contraseña es débil. Debe tener al menos 6 caracteres");
          } else if (error.code === "auth/email-already-in-use") {
            console.error("Error: El correo electrónico ya está en uso. Prueba con otro");
          } else if (error.code === "auth/invalid-email") {
            console.error("Error: El formato del correo electrónico no es válido");
          } else {
            console.error("Error al registrar usuario:", error.message);
          }
        
        }
      }

      
    return (
        <Context.Provider
            value={{
                ShowListHours,
                ReservationsForDate,
                SaveScheduledform,
                signup,
                useContextAir
            }}
        >
            {children}
        </Context.Provider>
    )


}