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
    //Varibale or state
    //here
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

      
    return (
        <Context.Provider
            value={{
                SaveScheduledform
            }}
        >
            {children}
        </Context.Provider>
    )


}