import { useState } from "react";

export default function Input() {
  const [inputt, setinputt] = useState("");

  function chanch(event) {
    setinputt(event.target.value);
  }
  return (
    <div>
      <label>you name</label>
      <input value={inputt} onChange={chanch} />
    </div>
  );
}
