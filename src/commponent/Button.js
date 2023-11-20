import "./main.css";

export default function Button({ title ,children }) {
  return (
    <div>
      {title == null || title === "" ? (
        <div></div>
      ) : (
        <button id="btn" >{title} 
        {children}
        </button>
        
      )}
    </div>
  );
}
