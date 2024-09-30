// src/App.js
import React, { useState } from 'react';
import VirtualEnvironment from './components/VirtualEnvironment';
import DragDropUI from './components/DragDropUI';
import './App.css';

function App() {
  const [objects, setObjects] = useState([]);

  const addObjectToScene = (type) => {
    setObjects([...objects, { type }]);
  };

  return (
    <div className="App">
      <h1>AR Interface Prototyping Tool</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <DragDropUI onAddObject={addObjectToScene} />
        <VirtualEnvironment objects={objects} />
      </div>
    </div>
  );
}

export default App;
