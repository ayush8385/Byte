import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { model } from "../constants";
import { fileToGenerativePart } from "../utils";
import { ThemeContext } from "../context/ThemContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const useChat = () => {
  const {
    currentChatHistory,
    setCurrentChatHistory,
    setShowLoader,
    setAnswerStream,
    sessionId,
    setSessionId,
  } = useContext(ChatContext);
  const navigate = useNavigate();

  const { userEmail } = useContext(ThemeContext);

  const handleResponse = async (result) => {
    let answer = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      for (const char of chunkText) {
        answer += char;
        setShowLoader(false);
        setAnswerStream((prev) => prev + char);
        // await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }
    setCurrentChatHistory((prev) => [
      ...prev,
      { parts: [{ text: answer }], role: "model" },
    ]);
    setAnswerStream("");
  };

  const getTextAnswer = async (ques) => {
    console.log(currentChatHistory);
    const chat = model.startChat({
      history: currentChatHistory.map((chatHistory) => ({
        parts: [{ text: chatHistory.parts?.[0]?.text }],
        role: chatHistory?.role,
      })),
      generationConfig: {
        maxOutputTokens: 5000,
      },
    });

    setCurrentChatHistory((prev) => [
      ...prev,
      { parts: [{ text: ques }], role: "user" },
    ]);
    setShowLoader(true);

    try {
      const result = await chat.sendMessageStream(ques);
      await handleResponse(result);
    } catch (e) {
      console.log(e);
      setShowLoader(false);
    }
  };

  const getImageAnswer = async (imageFiles) => {
    const imageParts = await Promise.all(
      [...imageFiles].map(fileToGenerativePart)
    );
    setCurrentChatHistory((prev) => [
      ...prev,
      { parts: [{ text: "", image: imageFiles }], role: "user" },
    ]);
    setShowLoader(true);

    try {
      const result = await model.generateContentStream(["", ...imageParts]);
      await handleResponse(result);
    } catch (e) {
      console.log(e);
      setShowLoader(false);
    }
  };

  const setNewChat = async () => {
    console.log(currentChatHistory);
    console.log(sessionId);
    try {
      const response = await fetch("http://localhost:8000/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentChatHistory,
          userEmail,
          sessionId,
        }),
      });
      const result = await response.json();
      console.log(result)
      setCurrentChatHistory([]);
      setSessionId(uuidv4());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { getTextAnswer, getImageAnswer, setNewChat };
};
