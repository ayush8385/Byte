import { useNavigate } from "react-router-dom";
import RobotAI from "../../assets/png/robot_ai.png";
import "./Intro.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemContext";
const Intro = () => {
  const navigate = useNavigate();
  const { userEmail, setUserEmail, theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={RobotAI} width={"60%"} />
      <div
        style={{
          width: "80%",
          marginTop: 30,
          marginBottom: 30,
          fontSize: "30px",
          fontWeight: "bold",
          color: theme === "light" ? "black" : "white",
        }}
      >
        Meet <span style={{ color: "#FF4500" }}> Byte,</span>
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          Your AI Assistant
        </div>
      </div>
      <input
        type="email"
        style={{border:"none", border: "1px solid black", borderRadius: 10, width:"70%",padding: "20px 20px",fontSize: 14, fontWeight:'bold'}}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Enter username..."
      />
      <p
        onClick={() => (userEmail !== "" ? navigate("/") : {})}
        className="menuBtnBg"
        style={{
          width: "30%",
          padding: 12,
          fontWeight: 600,
          fontSize: 16,
          textAlign: "center",
          cursor: "pointer",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        Get Started
      </p>
    </div>
  );
};
export default Intro;
