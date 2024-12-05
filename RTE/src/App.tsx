import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import Editor from './Editor'; // Import the Editor component

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Rich Text Editor</h1>
      
      {/* Add the Editor Component */}
      <Editor />
    </div>
  );
}

export default App;
