import "./App.css";
import Todolist from "./components/Todolist";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Tostprovider } from "./context/Tostcontext";
import TodosProvider from "./context/Listcontext";

// array

const THEME = createTheme({
  typography: {
    allVariants: {
      fontFamily: "ALKS",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Tostprovider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#222",
            direction: "rtl",
          }}
          className="App"
        >
          <TodosProvider>
            <Todolist />
          </TodosProvider>
        </div>
      </Tostprovider>
    </ThemeProvider>
  );
}

export default App;
