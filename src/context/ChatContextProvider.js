import { useMemo, useState } from "react";
import { ChatContext } from "./ChatContext";
import { v4 as uuidv4 } from "uuid";

const ChatContextProvider = ({ children }) => {
  const [currentChatHistory, setCurrentChatHistory] = useState([]);
  const [answerStream, setAnswerStream] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [sessionId, setSessionId] = useState(uuidv4())
  const value = useMemo(
    () => ({
      setCurrentChatHistory,
      currentChatHistory,
      setAnswerStream,
      answerStream,
      showLoader,
      setShowLoader,
      sessionId,
      setSessionId,
    }),
    [
      setCurrentChatHistory,
      currentChatHistory,
      answerStream,
      setAnswerStream,
      showLoader,
      setShowLoader,
      sessionId,
      setSessionId,
    ]
  );
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
export default ChatContextProvider;
