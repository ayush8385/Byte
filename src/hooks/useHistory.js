import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemContext";

export const useHistory = () => {
  const { userEmail } = useContext(ThemeContext)
  const [chatHistoryList, setChatHistoryList] = useState([]);
  const fetchChatHistory = async () => {
    try {
      const response = await fetch(`http://localhost:8000/history${userEmail}`);
      const result = await response.json();
      console.log(result);
      setChatHistoryList(result?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchChatHistory();
  }, []);
  return { chatHistoryList };
};
