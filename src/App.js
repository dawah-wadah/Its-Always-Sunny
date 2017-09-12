import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './input';
import TitleCard from '.titlecard.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Input/>
      </div>
    );
  }
}

export default App;
