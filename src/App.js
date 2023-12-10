import "./App.css";
import Todolist from "./components/Todolist";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Listcontex } from "./context/Listcontext";
import { useState } from "react";
import { v4 as idtodo } from "uuid";
import { Tostprovider } from "./context/Tostcontext";

// array

const todoslist = [
  {
    id: idtodo(),
    title: "دراسة",
    body: "من ساعة 1 الى 2",
    iscompleted: false,
  },
];

const THEME = createTheme({
  typography: {
    allVariants: {
      fontFamily: "ALKS",
    },
  },
});
function App() {
  const [to, setto] = useState(todoslist);

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
          <Listcontex.Provider value={{ to, setto }}>
            <Todolist />
          </Listcontex.Provider>
        </div>
      </Tostprovider>
    </ThemeProvider>
  );
}

export default App;
