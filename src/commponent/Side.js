
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

            <Button title="nor" />
            <Button title="ali" />
            <Button title="ahmd" />
            <Button title="" />
           
      </div>
    </div>
  );
}

