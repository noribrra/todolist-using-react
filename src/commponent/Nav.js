import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div
      style={{
        backgroundColor: "brown",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 40px",
        height: "60px",
      }}
    >
      <Link to="/">
        <li style={{ margin: "0px 20px", color: "#fff", cursor: "pointer" }}>
          home
        </li>
      </Link>
      <Link to="/nor">
        <li style={{ margin: "0px 20px", color: "#fff", cursor: "pointer" }}>
          Nor
        </li>
      </Link>
    </div>
  );
}
