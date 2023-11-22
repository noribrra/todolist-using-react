import "./form.css";
import Amodel from "./Amodel";
import Minput from "./Minput";
import { useState } from "react";

export default function Lform() {
  const [ms, setms] = useState(null);
  const [showmodal, setshomadel] = useState(false);
  const [forminput, setforminput] = useState({
    name: "",
    number: "",
    age: "",
    salary: "",
    employee: "",
  });
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
        <label htmlFor="name"> Name</label>
        <input
          placeholder="NOR IBRAHIM"
          value={forminput.name}
          type="text"
          id="nor"
          onChange={(e) => {
            setforminput({ ...forminput, name: e.target.value });
          }}
        />
        <Minput
          value={forminput.number}
          setforminput={setforminput}
          forminput={forminput}
        />
        {/* <label htmlFor="number"> Namber</label>
        <input
          placeholder="+963 994 595 431"
          value={forminput.number}
          type="text"
          id="number"
          onChange={(e) => {
            setforminput({ ...forminput, number: e.target.value });
          }}
        /> */}
        <label htmlFor="age"> Age</label>
        <input
          placeholder="22"
          value={forminput.age}
          type="text"
          id="age"
          onChange={(e) => {
            setforminput({ ...forminput, age: e.target.value });
          }}
        />
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
