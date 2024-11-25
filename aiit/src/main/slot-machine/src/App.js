import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SlotMachine from './SlotMachine';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SlotMachine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
