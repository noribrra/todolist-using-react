import { useState } from "react";

export default function Form() {
  //   const [nameinput, setnameinput] = useState("");
  //   const [emailinput, setemailinput] = useState("");
  const [forminput, setforminput] = useState({
    name: "",
    email: "",
    password: "",
    genral: "",
    isstudent: false,
    country: "",
    status: "",
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(forminput);
      }}
    >
      <label htmlFor="">name:</label>
      <input
        value={forminput.name}
        onChange={(event) => {
          setforminput({ ...forminput, name: event.target.value });
        }}
      />
      <hr />
      <label htmlFor="">Email:</label>
      <input
        value={forminput.email}
        type="email"
        onChange={(event) => {
          setforminput({ ...forminput, email: event.target.value });
        }}
      />
      <hr />
      <label htmlFor="">Password:</label>
      <input
        value={forminput.password}
        type="password"
        onChange={(event) => {
          setforminput({ ...forminput, password: event.target.value });
        }}
      />
      <hr />
      <label htmlFor="">texgenral informationt</label>
      <textarea
        onChange={(event) => {
          setforminput({ ...forminput, genral: event.target.value });
        }}
        value={forminput.genral}
      />
      <hr />
      <label htmlFor="">are yot student</label>
      <input
        checked={forminput.isstudent}
        type="checkbox"
        onChange={(event) => {
          setforminput({ ...forminput, isstudent: event.target.checked });
        }}
      />
      <hr />
      <select
        value={forminput.country}
        onChange={(event) => {
          setforminput({ ...forminput, country: event.target.value });
        }}
      >
        <option>egpt</option>
        <option>syria</option>
        <option>ksa</option>
        <option>iraq</option>
      </select>
      <hr />
      <hr />
      <div>
        <input
          type="radio"
          checked={forminput.status === "student"}
          onChange={() => {
            setforminput({ ...forminput, status: "student" });
          }}
        />
        student
        <input
          type="radio"
          checked={forminput.status === "techer"}
          onChange={() => {
            setforminput({ ...forminput, status: "techer" });
          }}
        />
        techer
      </div>

      <button>submit</button>
    </form>
  );
}
