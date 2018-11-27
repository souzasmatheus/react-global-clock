import React, { Component } from 'react'
import './App.css'
import Routes from './route/routes'
import Menu from './presentation/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;