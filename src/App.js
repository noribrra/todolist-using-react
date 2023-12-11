import { useState, useReducer } from "react";
import "./App.css";
import { redus } from "./reducers/result";

function App() {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [res, dispatch] = useReducer(redus, null);

  // functions
  function add() {
    dispatch({ type: "add", ac: { num1: num1, num2: num2 } });
  }
  function sub() {
    dispatch({ type: "sub", ac: { num1: num1, num2: num2 } });
  }
  function mul() {
    dispatch({ type: "mul", ac: { num1: num1, num2: num2 } });
  }
  function div() {
    dispatch({ type: "div", ac: { num1: num1, num2: num2 } });
  }
  return (
    <div
      className="App"
      style={{
        backgroundColor: "tomato",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "100%" }}>
        <div>
          <label htmlFor="">num1</label>
          <input
            onChange={(e) => {
              setnum1(e.target.value);
            }}
            value={num1}
          />
        </div>
        <div>
          <label htmlFor="">num2</label>
          <input
            onChange={(e) => {
              setnum2(e.target.value);
            }}
            value={num2}
          />
        </div>
      </div>
      <div style={{ marginTop: "40PX" }}>
        <div>
          <button onClick={add}>Add</button>
        </div>
        <div>
          <button onClick={sub}>SUBtract</button>
        </div>
        <div>
          <button onClick={mul}>MULTIPLY</button>
        </div>
        <div>
          <button onClick={div}>divide</button>
        </div>
      </div>
      <div>
        <h1>{res}</h1>
      </div>
    </div>
  );
}

export default App;
