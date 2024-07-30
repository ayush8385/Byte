import InputBox from "./InputBox";
import ChatsView from "./ChatsView";
const ChatScreen = () => {
  return (
    <div
      style={{
        width: "90%",
        marginBottom: 12,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "hidden",
      }}
    >
      <ChatsView />
      <InputBox />
    </div>
  );
};
export default ChatScreen;
