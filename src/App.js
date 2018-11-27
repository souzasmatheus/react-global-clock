import React, { Component } from 'react';
import './App.css';
import Clock from './presentation/clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
