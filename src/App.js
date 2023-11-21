import "./App.css";
import { useState } from "react";
let next = 5;

function App() {
  const [name, setname] = useState("");
  const [mname, setmname] = useState([
    { id: 1, nn: "mac" },
    { id: 2, nn: "iphone" },
    { id: 3, nn: "samsung" },
    { id: 4, nn: "windows" },
  ]);
  const divices = mname.map((div) => {
    return (
      <li key={div.id} style={{ margin: "20px" }}>
        {div.nn}{" "}
        <button
          onClick={() => {
            deleteclick(div.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            editclick(div.id);
          }}
        >
          edit
        </button>
      </li>
    );
    function deleteclick(id) {
      const newd = mname.filter((divv) => {
        return divv.id !== id;
      });
      setmname(newd);
    }
    function editclick(id) {
      const newdiv = mname.map((divs) => {
        if (divs.id === id) {
          let newobj = { ...divs, nn: divs.nn + "nor" };
          return newobj;
        } else {
          return divs;
        }
      });
      setmname(newdiv);
    }
  });
  return (
    <div className="App">
      {divices}
      <div>
        <input
          value={name}
          type="text"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <button onClick={click}>add</button>
      </div>
    </div>
  );
  function click() {
    setmname([...mname, { id: next, nn: name }]);
    next = next + 1;
  }
}

export default App;
