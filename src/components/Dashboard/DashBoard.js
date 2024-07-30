import "./Dashboard.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemContext";
const DashBoard = () => {
  const { userEmail } = useContext(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userEmail) {
      navigate("/intro");
    }
  }, [userEmail]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingBottom: 10,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default DashBoard;
