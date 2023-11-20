import { useState } from "react";

export default function App() {
  const [allinput, setalliput] = useState({
    firstname: "nor",
    lastname: "",
    scor: 0,
  });
  return (
    <>
      <div style={{ padding: "100px" }}>
        <label>scor :{allinput.scor}</label>
        <button
          onClick={() => {
            let num = allinput.scor;
            setalliput({ ...allinput, scor: num + 1 });
          }}
        >
          +1
        </button>

        <hr />
        <label>first name</label>
        <input
          value={allinput.firstname}
          type="text"
          onChange={(event) => {
            setalliput({ ...allinput, firstname: event.target.value });
          }}
        />
        <hr />
        <label>last name</label>
        <input
          value={allinput.lastname}
          type="text"
          onChange={(event) => {
            setalliput({ ...allinput, lastname: event.target.value });
          }}
        />
      </div>
    </>
  );
}
