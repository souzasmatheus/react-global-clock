import React, { Component } from 'react'
import './App.css'
import Routes from './route/routes'
import Menu from './templates/menu'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hour: 0,
      minute: 0,
      ampm: ''
    }

    this.getCityTime = this.getCityTime.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
  }

  componentDidUpdate() {
    const updatedMinute = this.state.minute + 1
    const updatedHour = this.state.hour + 1
    this.countSeconds = setInterval(() => {
      (this.state.minute < 60) ?
        this.setState({...this.state, minute: updatedMinute}) :
        this.setState({...this.state, hour: updatedHour, minute: 0})
    }, 60000)
  }

  componentWillUnmount() {
    clearInterval(this.countSeconds)
  }

  handleResponse(res) {
    const timeWithDate = res.data.time_zone[0].localtime
    const time = timeWithDate.split(' ')[1]
    const hour = time.split(':')[0]
    const minute = time.split(':')[1]
    this.setState({
      ...this.state,
      hour: Number(hour),
      minute: Number(minute)
    })
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
      res => {
        this.handleResponse(res)
      },
      err => console.error(
        new Error("didn't work")
      )
    )
  }

  render() {
    return (
      <div className="App">
        <Menu onSearch={this.getCityTime}/>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <Routes hour={this.state.hour}
            minute={this.state.minute}/>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;