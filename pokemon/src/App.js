import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="rounded bg-red-700 text-white py-2 px-2 text-xl">
          Testing Tailwind
        </button>
      </header>
    </div>
  );
}

export default App;
