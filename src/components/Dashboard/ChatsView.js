import { useContext, useEffect, useRef } from "react";
import Loader from "../Loader/Loader";
import ChatTextBox from "./ChatTextBox";
import { ChatContext } from "../../context/ChatContext";
import RandomView from "./RandomView";

const ChatsView = () => {
  const chatContainerRef = useRef(null);
  const { currentChatHistory, showLoader, answerStream } =
    useContext(ChatContext);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [currentChatHistory, answerStream]);

  return (
    <div
      ref={chatContainerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 10,
        width: "100%",
        flex: 1,
        overflowY: "scroll",
        alignItems: "flex-end",
        scrollbarWidth: "none",
      }}
    >
      {currentChatHistory.length > 0 ? (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            {currentChatHistory.map((item, index) => {
              return item?.parts?.[0]?.image ? (
                <div
                  style={{
                    display: "flex",
                    maxWidth: "70%",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                  }}
                >
                  {Object.entries(item?.parts?.[0]?.image).map(
                    ([key, file]) => (
                      <img
                        key={key}
                        src={URL.createObjectURL(file)}
                        width={80}
                        height={80}
                        style={{
                          margin: 5,
                          borderRadius: 16,
                        }}
                      />
                    )
                  )}
                </div>
              ) : (
                <ChatTextBox
                  key={index}
                  text={item?.parts?.[0]?.text}
                  role={item?.role}
                />
              );
            })}
          </div>
          {answerStream && (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <ChatTextBox text={answerStream} />
            </div>
          )}
          {showLoader && (
            <div style={{ alignSelf: "flex-start" }}>
              <Loader />
            </div>
          )}
        </>
      ) : (
        <RandomView/>
      )}
    </div>
  );
};
export default ChatsView;
