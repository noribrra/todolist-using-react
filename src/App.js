import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  function add() {
    setcount(count + 1);
    setcount((c) => {
      return c + 1;
    });
  }
  return (
    <div className="App">
      <h1> the Count is:{count}</h1>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
