import { createContext, useContext, useState, useEffect } from "react"
import { db, auth } from "./firebase/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth"
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
  const [isAuth, setisAuth] = useState(false)
  const [user, setUser] = useState(null);
  //Permisos
  const [CanEditPermi, setCanEditPermi] = useState(false)
  const [CanReservation, setCanReservation] = useState(false)
  const [CanEdit, setCanEdit] = useState(false)
  const [CanDelete, setCanDelete] = useState(false)
  const [CanSaveDoc, setCanSaveDoc] = useState(false)
  const [CanChangeDoc, setCanChangeDoc] = useState(false)
  const [CanChangeImg, setCanChangeImg] = useState(false)
  const [CanChanInfoAer, setCanChanInfoAer] = useState(false)
  const [WhichRole, setWhichRole] = useState(null)

  //Funtions
  const LogIn = async (email, password) => {

    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        user.getIdToken().then((value) => {
          localStorage.setItem("Token", value)
          localStorage.setItem("DisplayName", user.displayName)
          setisAuth(true)

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



  const signup = async (datos) => {
    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datos.email)) {
      console.error("Error: El formato del correo electrónico no es válido");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        user.getIdToken().then((value) => {
          localStorage.setItem("Token", value)
          localStorage.setItem("DisplayName", user.displayName)

        })
      })
      // Actualizar el perfil del usuario con el nombre
      await updateProfile(auth.currentUser, { displayName: name });
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        user.getIdToken().then((value) => {
          localStorage.setItem("Token", value)
          localStorage.setItem("DisplayName", user.displayName)

        })
      })
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


  const ShowRoles = async (id) => {
    try {
      const fetchData = ref(db, 'Roles/');
      onValue(fetchData, (snapshot) => {
        const data = snapshot.val();
        const loggedInUserRole = Object.values(data || {})
          .filter(rol => rol.userId === id)
          .map(rol => rol.role);
        const roleAsString = loggedInUserRole.join('');
        const infoUsertype = Object.values(data || {}).find(rolUser => rolUser.userId === id)

        if (roleAsString === "user") {
          console.log("Es user")
          setWhichRole(roleAsString)
          //CanReservar
          if (infoUsertype) {
            if (infoUsertype.hasOwnProperty('CanReservar') && infoUsertype.CanReservar === true) {
              setCanReservation(true);
            }
            if (infoUsertype.hasOwnProperty('CanEdit') && infoUsertype.CanEdit === true) {
              setCanEdit(true);
            }
          }
          localStorage.setItem("Rol", roleAsString)
        } else if (roleAsString === "admin") {
          console.log("es admin")
          setWhichRole(roleAsString)
          //FUNCION PARA PODER EDITAR LOS PERMISOS 
          let iduser = "K8GZUlVesTUxpuEE8abjjuIJlai2"
          // const roluser = Object.values(data || {}).find(rolUser => rolUser.userId === iduser)
          if (infoUsertype.CanEdirPerm === true) {
            console.log("Tiene permiso de habilidades para el usuario")
            localStorage.setItem("Rol", roleAsString)
            setCanEditPermi(true)
            // EditPermission(roluser.userId, "CanEdit")
          }
          //El tipo de permiso asignado por el admin, se puede usar un Input select, ya con esto permisos
          //Tiene que tener su propio nombre ya asignado fijamente 
          //Variables
          //CanReservar

        } else if (roleAsString === "maintance") {
          console.log("Es maintance")
          setWhichRole(roleAsString)
          //CanReservar
          //CanEdit
          //CanDelete
          //CanChangeDoc
          //CanSaveDoc
          //CanImgAer
          //CanInfoAer
          if (infoUsertype) {
            const {
              CanReservar,
              CanEdit,
              CanDelete,
              CanChangeDoc,
              CanSaveDoc,
              CanImgAer,
              CanInfoAer
            } = infoUsertype;

            // Verificar si el usuario tiene ciertos permisos
            if (CanReservar && CanEdit && CanDelete && CanChangeDoc && CanSaveDoc && CanImgAer && CanInfoAer) {
              console.log("El usuario tiene permisos para reservar, eliminar y guardar documentos.");
              localStorage.setItem("Rol", roleAsString)
              setCanReservation(true)
              setCanEdit(true)
              setCanDelete(true)
              setCanChangeDoc(true)
              setCanChangeImg(true)
              setCanSaveDoc(true)
            } else {
              console.log("El usuario no tiene todos los permisos necesarios.");
            }
          } else {
            console.log("No se encontró ningún usuario con el ID proporcionado.");
          }
        } else if (roleAsString === "owner") {
          console.log("Es owner")
          setWhichRole(roleAsString)
          if (infoUsertype) {
            const {
              CanEdirPerm,
              CanEdit,
              CanDelete,
              CanChangeDoc,
              CanSaveDoc,
              CanImgAer,
              CanInfoAer
            } = infoUsertype;

            // Verificar si el usuario tiene ciertos permisos
            if (CanEdirPerm && CanEdit && CanDelete && CanChangeDoc && CanSaveDoc && CanImgAer && CanInfoAer) {
              console.log("El usuario tiene permisos para reservar, eliminar y guardar documentos y dar permisos a usuarios general.");
              setCanEdit(true)
              setCanDelete(true)
              setCanEditPermi(true)
              setCanChangeDoc(true)
              setCanChangeImg(true)
              setCanSaveDoc(true)
              localStorage.setItem("Rol", roleAsString)
            } else {
              console.log("El usuario no tiene todos los permisos necesarios.");
            }
          } else {
            console.log("No se encontró ningún usuario con el ID proporcionado.");
          }
        } else if (roleAsString === "manager") {

          console.log("Es manager")
          setWhichRole(roleAsString)
          //Allpermission
          if (infoUsertype) {
            if (infoUsertype.Allpermission) {
              console.log("Todos los permisos permitidos")
              localStorage.setItem("Rol", roleAsString)
              setCanReservation(true)
              setCanEdit(true)
              setCanDelete(true)
              setCanEditPermi(true)
              setCanSaveDoc(true)
              setCanChangeDoc(true)
              setCanChangeImg(true)
              setCanChanInfoAer(true)
            } else {
              console.log("El usuario no tiene  los permisos")
            }
          } else {
            console.log("No se encontró ningún usuario con el ID proporcionado.");
          }
        }
      });
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const EditPermission = async (iduser, permittype) => {
    //Esta funcion solo permite agregar acceso a los usuario
    try {
      const rolesRef = ref(db, 'Roles');
      const queryById = query(rolesRef, orderByChild('userId'), equalTo(iduser));
      const snapshot = await get(queryById);

      if (snapshot.exists()) {
        const key = Object.keys(snapshot.val())[0];
        const userRef = ref(db, `Roles/${key}`);

        const updateData = {};
        updateData[permittype] = true;

        await update(userRef, updateData);

        toast.success(`Permiso de ${permittype} actualizado exitosamente`, {
          theme: "dark"
        });
      } else {
        console.log("No se encontró ningún elemento con la ID proporcionada");
      }
    } catch (error) {
      console.error("Error al editar elemento:", error);
      throw error;
    }
  };


  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      localStorage.setItem("auth", currentUser)
    });
    return () => unsubuscribe();
  }, [user]);

  useEffect(() => {
    if (user) {
      ShowRoles(user.uid)
    }
  }, [user])

  console.log("Pude reservar ? " + CanReservation)


  useEffect(() => {
    if (user) {
      ShowRoles(user.uid)

    }

  }, [user])


  console.log("Pude reservar ? " + CanReservation)


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
        GetAll,
        CanReservation,
        CanEdit,
        CanDelete,
        WhichRole
      }}
    >
      {children}
    </Context.Provider>
  )


}