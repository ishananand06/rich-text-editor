import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Editor from "./Editor.tsx"; // Import the Editor component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="text-center my-4">Vite + React + Tiptap</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)} className="btn btn-primary">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center">
        Click on the Vite and React logos to learn more
      </p>

      {/* Add the Editor Component */}
      <Editor />
    </div>
  );
}

export default App;
