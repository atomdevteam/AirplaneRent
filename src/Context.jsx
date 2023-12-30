import { createContext, useContext, useState, useEffect } from "react"
import { db, auth } from "./firebase/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { toast } from "react-toastify"
import { set, ref, query, orderByChild, equalTo, onValue, get, update, push, remove } from "firebase/database"


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
  const [AllReservations, setAllReservations] = useState([])
  const [isAuth, setisAuth] = useState(null)
  const [user, setUser] = useState(null);
  //Funtions
  const LogIn = async (email, password) => {

    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        user.getIdToken().then((value) => {
          localStorage.setItem("Token", value)
          localStorage.setItem("DisplayName", user.displayName)
          toast.success("Session started successfully!",
            {
              theme: "dark"
            })

        })
      })
    } catch (error) {
      toast.error('Failed to start session!', {
        theme: 'dark',
      });
    }
  }

  const logout = async () => {
    console.log("Logout")
    await signOut(auth)
  }
  const SaveScheduledform = async (datos) => {
    try {
      const newScheduledformRef = push(ref(db, 'Scheduledform/'));
      const newScheduledformKey = newScheduledformRef.key;
      await set(newScheduledformRef, datos);
      toast.success("Done!",
      {
        theme: "dark"
      })
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
        toast.success("Reservation successfully deleted!",
        {
          theme: "dark"
        })
       
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
        toast.success("Reservation edited successfully",
          {
            theme: "dark"
          })
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

  const GetAll = async () => {
    const partnersRef = ref(db, 'Scheduledform');

    try {
      const partnersSnapshot = await get(partnersRef);

      if (partnersSnapshot.exists()) {
        // Obtén todos los datos de Partners
        const partnersData = partnersSnapshot.val();
        const allReservations = Object.values(partnersData || {});
        return allReservations;
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  useEffect(() => {
    console.log("Reservaciones")
    console.log(ReservationsForDate)
    console.log("Todas....")
    console.log(AllReservations)
  }, [ReservationsForDate, AllReservations])


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

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      localStorage.setItem("auth", currentUser)
     
    });
    return () => unsubuscribe();
  }, [user]);


  return (
    <Context.Provider
      value={{
        ShowListHours,
        ReservationsForDate,
        SaveScheduledform,
        signup,
        LogIn,
        isAuth,
        logout,
        AllReservations,
        DeleteScheduleById,
        EditScheduleById,
        user,
         GetAll
      }}
    >
      {children}
    </Context.Provider>
  )


}