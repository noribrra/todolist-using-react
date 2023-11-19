import "./App.css";

function App() {
  const tasks = [
    { id: 1, title: "doing my hommork" },
    { id: 2, title: "reading" },
    { id: 3, title: "play" },
    { id: 4, title: "writing" },
  ];
  const mylist = tasks.map((task) => {
    return <div style={{
      color:"black",
      backgroundColor:"teal",
      margin:"20px 20px"
    }} key={task.id}>{task.title}</div>;
  });

  

  return (
    <div className="App">
      <div>
        {mylist}
      </div>
    </div>
  );
}

export default App;
