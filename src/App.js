import React, { Component } from 'react'
import './App.css'
import Routes from './route/routes'
import Menu from './presentation/menu'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }

    //this.returnTime = this.returnTime.bind(this)
    this.getCityTime = this.getCityTime.bind(this)
  }

  getCityTime(city) { 
    new Promise((resolves, rejects) => {
      const api = `https://api.worldweatheronline.com/premium/v1/tz.ashx?key=6bdee2019bc74d3bb34145746182611&q=${city}&format=json`
      const request = new XMLHttpRequest()
      request.open('GET', api)
      request.onload = () =>
        (request.status === 200) ?
          resolves(JSON.parse(request.response)) :
          rejects(Error(request.statusText))
      request.onerror = (err) => rejects(err)
      request.send()
    })
    .then(
      res => console.log(res.data.time_zone[0].localtime),
      err => console.error(
        new Error("didn't work")
      )
    )
  }

  render() {
    return (
      <div className="App">
        <Menu onSearch={this.getCityTime}/>
        <Routes />
      </div>
    );
  }
}

export default App;