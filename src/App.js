import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    // <div className="App">
    // <h1>Online Shopping World</h1>
    // </div>
    React.createElement('div',null,React.createElement('h1',null,'Online shopping World'))
  );
}

export default App;

