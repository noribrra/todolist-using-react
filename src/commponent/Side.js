import Button from "./Button";

export default function Side() {
  return (
    <div
      style={{
        border: "solid teal 5px",
        margin: "20px 20px",
        width: "30%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {btns}
      </div>
    </div>
  );
}

const btn = [
  { id: 1, title: "nor", children: <div>hellow world </div> },
  { id: 2, title: "omer", children: <div>hellow omer </div> },
  {
    id: 3,
    title: "ali",
    children: <div>hellow lila </div>,
  },

];
const btns = btn.map((bt) => {
  return (
    <Button key={bt.id} title={bt.title}>
      <div style={{margin:"10px",backgroundColor:"orange"}}>{bt.children}</div>
    </Button>
  );
});
