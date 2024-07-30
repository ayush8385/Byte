import "./ChatHistory.css";
import { useHistory } from "../../hooks/useHistory";
import Markdown from "react-markdown";
import OpenIcon from "../../assets/png/open.png";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { useNavigate } from "react-router-dom";
const ChatHistory = () => {
  const { chatHistoryList } = useHistory();
  const { setCurrentChatHistory, setSessionId } = useContext(ChatContext);
  const navigate = useNavigate()
  const openChatHistory = (history) => {
    console.log('history', history?.sessionId)
    setCurrentChatHistory(history?.currentChatHistory);
    setSessionId(history?.sessionId);
    navigate("/")
  };

  return (
    <div
      style={{
        width: "90%",
        marginTop: 12,
        marginBottom: 12,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "scroll",
        scrollbarWidth:"none",
      }}
    >
      {chatHistoryList.slice().reverse().map((chatHistory) => {
        const { currentChatHistory, sessionId } = chatHistory;
        const lastChat =
          currentChatHistory[currentChatHistory.length - 1]?.parts?.[0];
        return (
          lastChat && (
            <div style={{ position: "relative" }}>
              <div
                key={sessionId}
                style={{
                  overflow: "scroll",
                  scrollbarWidth: "none",
                  marginBottom: 12,
                  borderRadius: 20,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  color: "white",
                  fontSize: 14,
                  maxHeight: 80,
                  padding: "10px 20px",
                }}
              >
                <Markdown>{lastChat?.text}</Markdown>
              </div>
              <img
                onClick={() => openChatHistory(chatHistory)}
                style={{ position: "absolute", top: 10, right: 10 }}
                src={OpenIcon}
                width={26}
                height={26}
              />
            </div>
          )
        );
      })}
    </div>
  );
};
export default ChatHistory;
