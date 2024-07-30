import { createContext } from "react";

export const ChatContext = createContext({
    setCurrentChatHistory:() => {},
    currentChatHistory:undefined,
    showLoader:undefined,
    setShowLoader:() => {},
    answerStream: undefined,
    setAnswerStream:() => {},
    sessionId: undefined,
    setSessionId:() => {},
})