import React, { Component } from 'react';
import './App.css';
import Input from './input';
import TitleCard from './titlecard.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleCard/>
        <Input/>
      </div>
    );
  }
}

export default App;
