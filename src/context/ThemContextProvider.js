import { useMemo, useState } from "react";
import { ThemeContext } from "./ThemContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [userEmail, setUserEmail] = useState(undefined);
  const value = useMemo(
    () => ({
      theme,
      setTheme,
      userEmail,
      setUserEmail,
    }),
    [theme, setTheme,userEmail,setUserEmail]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
