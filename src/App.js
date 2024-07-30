import RootNavigator from "./components/RootNavigator";
import ThemeContextProvider from "./context/ThemContextProvider";
function App() {
  return (
    <ThemeContextProvider>
      <RootNavigator />
    </ThemeContextProvider>
  );
}

export default App;
