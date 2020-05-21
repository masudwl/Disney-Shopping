import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Item from './Components/Item/Item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Item></Item>
      </header>
    </div>
  );
}

export default App;
