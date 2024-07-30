import { useContext } from "react";
import { ThemeContext } from "../context/ThemContext";
import ChatContextProvider from "../context/ChatContextProvider";
import ChatHistory from "./ChatHistory/ChatHistory";
import ChatScreen from "./ChatScreen/ChatScreen";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");
const { default: Intro } = require("./Intro/Intro");
const { default: DashBoard } = require("./Dashboard/DashBoard");

const RootNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: "/intro",
      element: <Intro />,
    },
    {
      path: "/",
      element: (
        <ChatContextProvider>
          <DashBoard />
        </ChatContextProvider>
      ),
      children: [
        {
          path:'/',
          element: <ChatScreen />,
        },{
          path:'/history',
          element: <ChatHistory/>
        }
      ]
    },
  ]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme === "dark" ? "rgba(0,0,0,0.9)" : "",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
};
export default RootNavigator;
