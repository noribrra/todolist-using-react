import { Outlet } from "react-router-dom";

export default function Postleout() {
  return (
    <>
      <h1 style={{ backgroundColor: "orange" }}>tish is post rour</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}
