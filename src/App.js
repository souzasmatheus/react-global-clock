import React, { Component } from 'react'
import './App.css'
import Routes from './route/routes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hour: 0,
      minute: 0,
      increment: 0
    }

    this.getCityTime = this.getCityTime.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
    this.checkSeconds = this.checkSeconds.bind(this)
    this.resetLastSearch = this.resetLastSearch.bind(this)
  }

  checkSeconds() {
    const minuteSum = this.state.minute + this.state.increment
    const currentHour = this.state.hour
    if (this.seconds % 60 === 0 && minuteSum < 59) {
      const increment = this.seconds / 60
      clearInterval(this.counter)
      this.setState({...this.state, increment})
    } else if (this.seconds % 60 === 0 && minuteSum === 59 && currentHour === 23) {
      this.seconds = 0
      const hour = 0
      const minute = 0
      const increment = 0
      clearInterval(this.counter)
      this.setState((state, props) => ({
        ...this.state,
        hour,
        minute,
        increment
      }))
    } else if (this.seconds % 60 === 0 && minuteSum === 59) {
      this.seconds = 0
      const minute = 0
      const increment = 0
      clearInterval(this.counter)
      this.setState((state, props) => ({
        ...this.state,
        hour: state.hour + 1,
        minute,
        increment
      }))
    }
  }

  componentDidUpdate() {
    this.counter = setInterval(() => {
      this.seconds = this.seconds + 1
      this.checkSeconds()
    }, 1000)
  }

  componentDidMount() {
    this.seconds = 0
    this.searchClicks = 0
  }

  handleResponse(res) {
    const timeWithDate = res.data.time_zone[0].localtime
    const time = timeWithDate.split(' ')[1]
    const hour = time.split(':')[0]
    const minute = time.split(':')[1]
    this.setState({
      ...this.state,
      hour: Number(hour),
      minute: Number(minute),
      increment: 0
    })
  }

  getCityTime(city) {
    new Promise((resolves, rejects) => {
      const api = `https://api.worldweatheronline.com/premium/v1/tz.ashx?key=3b29e5a6363a47a1930164006192801&q=${city}&format=json`
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

  resetLastSearch(city) {
    this.searchClicks ++
    if (this.searchClicks > 0) {
      this.searchClicks = 0
      clearInterval(this.counter)
      this.seconds = 0
      this.getCityTime(city)
    }
  }

  render() {
    return (
      <Routes hour={this.state.hour}
      minute={this.state.minute}
      increment={this.state.increment}
      onSearch={this.resetLastSearch}/>
    );
  }
}

export default App;
