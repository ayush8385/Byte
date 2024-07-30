import { useContext, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ThemeContext } from "../../context/ThemContext";
import ExpandDark from "../../assets/png/down-dark.png";
import ExpandLight from "../../assets/png/down-light.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy } from "react-icons/fa";

const ChatTextBox = ({ text, role }) => {
  const { theme } = useContext(ThemeContext);
  const markdownRef = useRef(null);
  const [expandable, setExpandable] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (markdownRef.current) {
      const isScrollable =
        markdownRef.current.scrollHeight > markdownRef.current.clientHeight;
      setExpandable(isScrollable);
    }
  }, [text]);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(
      ()=>{},
      (err) => console.error("Failed to copy: ", err)
    );
  };

  return (
    <div
      className={`menuBtnBg ${(theme === 'dark') && 'dark'}`}
      style={{
        color: theme === "dark" ? "white" : "black",
        alignSelf: role && role === "user" ? "flex-end" : "flex-start",
        fontSize: 12,
        maxWidth: "80%",
        maxHeight: isExpanded ? "100%" : 250,
        marginTop: 5,
        marginBottom: 5,
        padding: "0px 10px",
        position: "relative",
      }}
    >
      <div
        ref={markdownRef}
        className={`${role && role === "user" ? "userChatBox" : "aiChatBox"}`}
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
          boxSizing: "border-box",
          scrollbarWidth: "none",
          padding: 0,
        }}
      >
        <ReactMarkdown
          children={text}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div style={{ position: "relative" }}>
                  <button
                    onClick={() =>
                      handleCopy(String(children).replace(/\n$/, ""))
                    }
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 0,
                      background: "none",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      opacity: 0.5,
                      zIndex: 9999,
                    }}
                  >
                    <FaCopy />
                  </button>
                  <SyntaxHighlighter
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{ borderRadius: '10px' }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
      {expandable && (
        <div
          style={{
            opacity: 0.7,
            width: 20,
            height: 20,
            borderBottomRightRadius: 10,
            position: "absolute",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding:5,
            paddingLeft: 10,
            bottom: 0,
            right: 0,
            backgroundColor: "grey",
            borderTopLeftRadius: 30,
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img
            src={theme === "dark" ? ExpandLight : ExpandDark}
            width={13}
            height={13}
          />
        </div>
      )}
    </div>
  );
};
export default ChatTextBox;
