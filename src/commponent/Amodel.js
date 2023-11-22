import "./form.css";

export default function Amodel({ isvesibel, erororms = null }) {
  if (isvesibel) {
    return (
      <div id="modal">
        <div
          style={{
            color: erororms ? "tomato" : "green",
          }}
          id="modal-content"
        >
          {/* <h1>the button has ben clicked</h1> */}
          <h1>{erororms != null ? erororms : "the button has ben clicked"}</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
