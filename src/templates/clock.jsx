import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ToggleButton from './toggleButton'

class Clock extends Component{
    constructor(props) {
        super(props)

        this.updateSeconds = this.updateSeconds.bind(this)
    }

    updateSeconds() {
        this.counter = setInterval(() => {
            this.seconds = this.seconds + 1
            console.log(this.seconds)
        }, 1000)
    }

    componentDidMount() {
        this.seconds = 0
    }

    componentWillReceiveProps() {
        this.updateSeconds()
    }

    componentWillUnmount() {
        clearInterval(this.counter)
    }

    render() {
        return (
        <div className="col-6 col-md-4">
            <div className="clockBorder p-3">
                <div className="clockDisplay">
                    <span>{(this.props.ampm === '24') ?
                                (this.props.hour > 9) ? 
                                this.props.hour : '0' + this.props.hour :
                                (this.props.hour < 10) ? 
                                    '0' + this.props.hour :
                                (this.props.hour < 13) ?
                                this.props.hour :
                                (this.props.hour === 24) ?
                                    '00' : this.props.hour - 12 }:</span>
                    <span>{(this.props.minute > 9) ? this.props.minute : '0' + this.props.minute}</span>
                    <span> </span>
                    <span>{(this.props.ampm === '24') ?
                                '' :
                                (this.props.hour < 13) ?
                                    'AM' : 'PM'}</span>
                </div>            
            </div>
            <div className="mt-2">
                <ToggleButton onToggle={this.props.onToggle}/>
            </div>
        </div>
        )
    }
}

Clock.propTypes = {
    hour: PropTypes.number,
    minute: PropTypes.number,
    ampm: PropTypes.string
}

export default Clock