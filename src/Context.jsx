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


    return (
        <Context.Provider
            value={{
                SaveListHour
            }}
        >
            {children}
        </Context.Provider>
    )


}