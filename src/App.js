import React, { Component } from 'react'
import './App.css'
import Clock from './presentation/clock'
import Menu from './presentation/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Clock />
      </div>
    );
  }
}

export default App;
