import "./main.css";

export default function Button({ title }) {
  return (
    <div>
      {title == null || title === "" ? (
        <div></div>
      ) : (
        <button id="btn" >{title} </button>
        
      )}
    </div>
  );
}
