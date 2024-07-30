import { useEffect, useRef } from "react";
import SendIcon from "../../assets/png/send.png";
import { useChat } from "../../hooks/useChat";

const InputBox = () => {
  const inputRef = useRef(null);
  const { getTextAnswer } = useChat();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <input
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === "enter") {
            getTextAnswer(e.target.value);
            e.target.value = "";
          }
        }}
        ref={inputRef}
        placeholder="Ask Byte Anything..."
        className="chatInputBoxBg"
      />
      <img
        onClick={() => {
          getTextAnswer(inputRef.current.value);
          inputRef.current.value = "";
        }}
        style={{ position: "absolute", right: 10, top: 5 }}
        width={24}
        height={24}
        src={SendIcon}
      />
    </div>
  );
};
export default InputBox;
