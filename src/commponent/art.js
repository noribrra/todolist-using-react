export default function Art({name,email,age,children}) {
    
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
          
          <h3>{email}</h3>
          
          <h3>{age}</h3>
          <hr />
          {children}
          <p></p>
        </div>
      </div>
    </>
  );
}
