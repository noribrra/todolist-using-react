import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./commponent/Nav";
import Home from "./commponent/Home";
import Nor from "./commponent/Nor";
import Post from "./commponent/Post";
import Page040 from "./commponent/Page040";

import { Postcontext } from "./context/Postcontext";
function App() {
  let postdata = [
    {
      id: 1,
      title: "nor",
      body: "this is nor post",
    },
    {
      id: 2,
      title: "ali",
      body: "this is ali post",
    },
    {
      id: 3,
      title: "ahmd",
      body: "this is ahmd post",
    },
    {
      id: 4,
      title: "omer",
      body: "this is omer post",
    },
  ];
  return (
    <Postcontext.Provider value={postdata}>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nor" element={<Nor />} />
          <Route path="/postd/:postId" element={<Post />} />
          <Route path="*" element={<Page040 />} />
        </Routes>
      </>
    </Postcontext.Provider>
  );
}

export default App;
