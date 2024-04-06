"use client"
import {  createContext, useState } from "react";
export const ThemContext = createContext(null)
const ContextProvider = ({children})=>{
    const [Light, setLight] = useState("dark")
    return(
        <ThemContext.Provider value={{Light, setLight}}>
            {children}
        </ThemContext.Provider>
    )
}
export default ContextProvider