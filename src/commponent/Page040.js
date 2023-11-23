import { Link } from "react-router-dom";

export default function Page040() {
  return (
    <h1>
      404 Not found
      <p>this page is not exist</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </h1>
  );
}
