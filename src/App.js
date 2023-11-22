import "./App.css";
import Lform from "./commponent/Lform";
import { UseContext } from "./Contexts/Usercontext";

function App() {
  return (
    <UseContext.Provider
      value={{
        name: "nor ibrahim",
        username: "king",
        email: "king.gmail.com",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",

          height: "100vh",
        }}
      >
        <Lform />
      </div>
    </UseContext.Provider>
  );
}

export default App;
