import "./form.css";
import Amodel from "./Amodel";
import Minput from "./Minput";
import { useState } from "react";
import { Leonforminput } from "../Contexts/Lonforminput";

export default function Lform() {
  const [ms, setms] = useState(null);
  const [showmodal, setshomadel] = useState(false);
  const [forminput, setforminput] = useState({
    name: "",
    number: "",
    age: "",
    salary: "less than 500$",
    employee: "",
  });
  // functions
  function clickform(e) {
    e.preventDefault();
    setshomadel(true);
    setms(null);
    let age = forminput.age;
    let num = forminput.number;
    if (num.length > 12 || num.length < 10) {
      setms("your namuber have to between 10-12");
    } else if (age < 18 || age > 40) {
      setms("your age have to between 18-40");
    }
  }
  // name
  function handelnamechangel(v) {
    setforminput({ ...forminput, name: v });
  }
  // number
  function handelnumberchangel(v) {
    setforminput({ ...forminput, number: v });
  }
  // age
  function handelagechangel(v) {
    setforminput({ ...forminput, age: v });
  }
  // end functions
  let disible =
    forminput.name === "" || forminput.age === "" || forminput.number === "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",

        height: "100vh",
      }}
      onClick={() => {
        if (showmodal) {
          setshomadel(false);
        }
      }}
    >
      <form id="form" action="" className="flex">
        <h1>Requesting loan</h1>
        <hr />
        <Leonforminput.Provider
          value={{
            nameofinput: "Name",
            setforminput: handelnamechangel,
            value: forminput.name,
          }}
        >
          <Minput />
        </Leonforminput.Provider>
        <Leonforminput.Provider
          value={{
            nameofinput: "Number",
            setforminput: handelnumberchangel,
            value: forminput.number,
          }}
        >
          <Minput />
        </Leonforminput.Provider>
        <Leonforminput.Provider
          value={{
            nameofinput: "Age",
            setforminput: handelagechangel,
            value: forminput.age,
          }}
        >
          <Minput />
        </Leonforminput.Provider>

        <label style={{ marginTop: "30px" }} htmlFor="empl">
          {" "}
          Are you an employee
        </label>
        <input
          checked={forminput.employee}
          type="checkbox"
          id="empl"
          onChange={(e) => {
            setforminput({ ...forminput, employee: e.target.checked });
          }}
        />
        <label htmlFor="">salary</label>
        <select
          value={forminput.salary}
          name=""
          id=""
          onChange={(e) => {
            console.log(e);
            setforminput({ ...forminput, salary: e.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>more than 2000$</option>
        </select>
        <button
          className={disible ? "dis" : ""}
          onClick={clickform}
          disabled={disible}
          id="subbtn"
        >
          submit
        </button>
      </form>
      <Amodel erororms={ms} isvesibel={showmodal} />
    </div>
  );
}
