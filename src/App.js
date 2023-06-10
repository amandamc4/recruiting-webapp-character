import { useState } from 'react';
import './App.css';

import Character from './character';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <Character name="Amanda"/>
      </section>
    </div>
  );
}

export default App;
