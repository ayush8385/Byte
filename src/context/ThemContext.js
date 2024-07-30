import { createContext } from "react";

export const ThemeContext = createContext({
    theme: undefined,
    setTheme: ()=> {},
    userEmail: undefined,
    setUserEmail: ()=> {},
})