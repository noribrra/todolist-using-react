export default function Post( {title,body}) {
  return (
    <div
      style={{
        
        border: "solid 5px teal",
        margin:"20px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>{title}</h2>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>{body}</p>
      </div>
    </div>
  );
}
