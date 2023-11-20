import { useState } from "react";

export default function Btn() {
  const [name, setname] = useState("nor");

  function btnclick() {
    name === "nor" ? setname("ali") : setname("nor");
  }

  return (
    <div>
      <button onClick={btnclick}>click me</button>
      <h1>{name}</h1>
    </div>
  );
}
