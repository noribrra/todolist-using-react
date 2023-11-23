import { Link } from "react-router-dom";
import { Postcontext } from "../context/Postcontext";
import { useContext } from "react";

export default function Nor() {
  let post = useContext(Postcontext);
  let postlist = post.map((post) => {
    return (
      <div
        key={post.id}
        style={{
          backgroundColor: "orange",
          margin: "20px",
          width: "200px",
          textAlign: "center",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        <Link to={`/postd/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
      </div>
    );
  });
  return <>{postlist}</>;
}
