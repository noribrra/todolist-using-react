import logo from "./logo.svg";
import "./App.css";
import Btn from "./But";
import Input from "./Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <Btn />
        <Input />
      </header>
    </div>
  );
}

export default App;
