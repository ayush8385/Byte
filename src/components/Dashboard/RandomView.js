import { useEffect, useState } from "react";
import { getRandomQuestions } from "../../utils";
import { useChat } from "../../hooks/useChat";

const RandomView = () => {
    const { getTextAnswer } = useChat();
  const [randomQuestions, setRandomQuestions] = useState([]);
  useEffect(() => {
    setRandomQuestions(getRandomQuestions(20));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: '100%',
        display: "flex",
        paddingTop: 20,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        overflow: "scroll",
        scrollbarWidth: "none",
      }}
    >
      {randomQuestions.map((item, index) => (
        <div
        onClick={() => getTextAnswer(item)}
          key={index}
          style={{
            margin: 5,
            cursor: "pointer",
            borderRadius: 10,
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            fontSize: 14,
            width: 100,
            height: 100,
            padding: "10px 20px",
            fontWeight: "bolder",
          }}
        >
          {item.charAt(0).toUpperCase()+ item.slice(1)}
        </div>
      ))}
    </div>
  );
};
export default RandomView;
