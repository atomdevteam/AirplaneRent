import { createContext, useContext, useState, useEffect } from "react"
import { db,auth } from "./firebase/firebase"
import { set, ref, onValue, get, update, push } from "firebase/database"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { toast } from "react-toastify"
const Context = createContext()
//123456789
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

      useEffect(() => {
        console.log("Reservaciones")
        console.log(ReservationsForDate)
      }, [ReservationsForDate])
      
      
      const signup = async (email, password) => {
        // Validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          console.error("Error: El formato del correo electrónico no es válido");
          return;
        }
      
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("Usuario registrado exitosamente");
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