import "./App.css";
import Art from "./commponent/art";

function App() {
  return (
    <div className="App">
      <Art name="ahmd" email="ahmd@gmail.com" age="21">
        ahmd ibrahim test
      </Art>

      <Art name="nor" email="nor@gmail.com" age="20">
        <h2 style={{
          backgroundColor:"blue",
        }}>nor test props child</h2>
      </Art>
      <Art name="ali" email="ali@gmail.com" age="11">
        <p style={{
          backgroundColor:"red"
        }}>ali test props child</p>
      </Art>
      <Art name="omer" email="omer@gmail.com" age="31">
        omer ibrahim test
      </Art>
    </div>
  );
}

export default App;
