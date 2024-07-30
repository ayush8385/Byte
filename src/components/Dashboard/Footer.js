import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemContext";
import ImageUploadView from "../SearchImage.js/ImageUploadView";
import { useChat } from "../../hooks/useChat";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../context/ChatContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { sessionId } = useContext(ChatContext);
  const [showImageUploadView, setShowImageUploadView] = useState(false);
  const { setNewChat } = useChat();
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p
          onClick={() => navigate("/")}
          className="footerTextBg"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          Home
        </p>
        <p
          onClick={() => {
            sessionId ? setNewChat() : alert("Empty Session Id");
          }}
          className="footerTextBg"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          New Chat
        </p>
        <p
          onClick={() => setShowImageUploadView(true)}
          className="footerTextBg"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          Search Image
        </p>
        <p
          onClick={() => navigate("/history")}
          className="footerTextBg"
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          History
        </p>
      </div>
      {showImageUploadView && (
        <ImageUploadView removeView={() => setShowImageUploadView(false)} />
      )}
    </>
  );
};
export default Footer;
