import { useState } from "react";
import "../assets/App.css";
import reactLogo from "../assets/react.svg";
import lamanLogo from "/lamanjs.svg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://lamanjs.lamanhub.site" target="_blank">
          <img src={lamanLogo} className="logo" alt="Laman.js logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Laman.js + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/entries/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React or Laman.js logos to learn more
      </p>
    </>
  );
}
