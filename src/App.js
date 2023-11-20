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
              {posts}
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

const post=[
  {id:1,title:"ahmd",body:"this ahmd body"},
  {id:2,title:"nor",body:"this nor body"},
  {id:3,title:"ali",body:"this ali body"},
  {id:4,title:"omer",body:"this omer body"},

]
const posts=post.map((postt)=>{
  return(
    <Post key={postt.id} title={postt.title} body={postt.body} />
  )
})

export default App;
