import { useContext } from "react";
import { Leonforminput } from "../Contexts/Lonforminput";

export default function Mminput({ value, setforminput, nameofinput }) {
  const inputvalues = useContext(Leonforminput);
  console.log(inputvalues);
  return (
    <>
      <label htmlFor={inputvalues.nameofinput + "id"}>
        {" "}
        {inputvalues.nameofinput}
      </label>
      <input
        value={inputvalues.value}
        type="text"
        id={inputvalues.nameofinput + "id"}
        onChange={(e) => {
          inputvalues.setforminput(e.target.value);
        }}
      />
    </>
  );
}
