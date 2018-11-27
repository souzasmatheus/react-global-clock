import React, { Component } from 'react'
import './App.css'
import Clock from './presentation/clock'
import SearchForm from './presentation/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
        <Clock />
      </div>
    );
  }
}

export default App;
