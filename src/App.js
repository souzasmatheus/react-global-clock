import React, { Component } from 'react'
import './App.css'
import Clock from './presentation/clock'
import Button from './presentation/button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Button styles="success" type="submit">SEND</Button>
      </div>
    );
  }
}

export default App;
