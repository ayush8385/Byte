import User from "../../assets/png/user.png";
import Sun from "../../assets/png/sun.png";
import Moon from "../../assets/png/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const {userEmail} = useContext(ThemeContext);
  const updateTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const navigate = useNavigate();
  return (
    <div
      className="headerBg"
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(30, 30, 30, 0.865)"
            : "rgba(30, 30, 30, 0.465)",
      }}
    >
      <p
      onClick={()=> navigate('/')}
        style={{
          color: theme === "dark" ? "white" : "black",
          margin: 0,
          padding: 0,
          fontWeight: "bolder",
          marginLeft: 20,
        }}
      >
        Byte
      </p>
      <div style={{display:'flex', alignItems:'center'}}>
        <p className="menuBtnBg" style={{padding:8, marginRight: 20, fontSize: 12}}>{userEmail}</p>
        <img
          style={{ marginRight: 20}}
          onClick={updateTheme}
          src={theme === "dark" ? Moon : Sun}
          width={26}
          height={26}
        />
        <img
          className="menuBtnBg"
          style={{ padding: 8, marginRight: 20 }}
          src={User}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
export default Header;
