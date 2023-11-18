import "./My.css"


function My() {
    const porson ={
        name:"nor"
    }
    const stelyE ={
        backgroundColor : "orange",
        width :"400px",
        fontSize:"30px"
    }
    
  return (
    <div>
        
      <h2 className={"nor"}  onClick={sayhello}>nor from my</h2>
      <button className={"btn btn-danger"}>button</button>

      <h1 style={stelyE}>ibrahim</h1>


      <h1 className={porson.name === "nor" ? "nor colors" : "greenbg colors"  }>
        check name
      </h1>
    </div>


  );
}

export default My;
function sayhello(){
    alert ("hello")
}

