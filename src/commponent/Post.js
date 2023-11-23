import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Postcontext } from "../context/Postcontext";
import Page040 from "./Page040";

export default function Post({ title, body }) {
  let posts = useContext(Postcontext);
  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.id == postId;
  });
  if (post) {
    return (
      <>
        <pre>
          <h2>post page</h2>

          <h1>{post.title}</h1>

          <p>{post.body}</p>
        </pre>
      </>
    );
  } else {
    return (
      <>
        <Page040 />
      </>
    );
  }
}
