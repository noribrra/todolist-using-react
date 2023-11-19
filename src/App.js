import "./App.css";
import Nav from "./commponent/Nave";
import Post from "./commponent/Post";
import Side from "./commponent/Side";
const show = true;

function App() {
  return (
    <div className="App">
      <Nav />

      {/* continer  */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* post and side bar */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "80%",
          }}
        >
          {/* post */}
          <div style={{ width: "60%" }}>
            <Post title="ahmd post" body="this is ahmd body" />
            <Post title="nor post" body="this is nor body" />
            <Post title="ali post" body="this is ali body" />
          </div>
          <Appsodemenu />
        </div>
      </div>
    </div>
  );
}

function Appsodemenu() {
  if (show) {
    return <Side />;
  }else{
    return null;
  }
}

export default App;
