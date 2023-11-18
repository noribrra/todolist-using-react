export default function Art({name,email,age}) {
    
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            color: "#fff",
            borderRadius: "10px",
            padding: "20px",
            marginTop: "20px ",
            width: "40%",
          }}
        >
          <h1>{name}</h1>
          <hr />
          <h3>{email}</h3>
          <hr />
          <h3>{age}</h3>
        </div>
      </div>
    </>
  );
}
