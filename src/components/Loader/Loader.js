import { useContext } from "react";
import "./Loader.css";
import { ThemeContext } from "../../context/ThemContext";
const Loader =() => {
    const {theme} = useContext(ThemeContext)
    return <div className={`loader ${theme}`}></div>
}
export default Loader