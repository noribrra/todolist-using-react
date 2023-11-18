import "./App.css";
import Nav from "./commponent/Nav";
import Post from "./commponent/Post";
import Side from "./commponent/Side";
function App() {
  return (
    <div className="App">
      <Nav />

      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
        {/* post and side  container  */}

        <div
          style={{
            display: "flex",
            width:"60%"
          }}
        >
          {/* post container */}
          <div
            style={{
              width: "70%",
            }}
          >
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>

          {/* Side menu */}

          <div style={{
            width:"30%"
          }}>
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
