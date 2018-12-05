import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ToggleButton from './toggleButton'

class Clock extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            hour: 0,
            minute: 0,
            ampm: '24'
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState((state, props) => ({
            hour: nextProps.hour,
            minute: nextProps.minute + props.increment
        }))
    }

    handleToggle() {
        if (this.state.ampm === '24') {
          this.setState({...this.state, ampm: '12'})
        } else if (this.state.ampm === '12') {
          this.setState({...this.state, ampm: '24'})
        }
    }

    render() {
        return (
        <div className="col-6 col-md-4">
            <div className="clockBorder p-3">
                <div className="clockDisplay">
                    <span>{(this.state.ampm === '24') ?
                                (this.state.hour > 9) ? 
                                this.state.hour : '0' + this.state.hour :
                                (this.state.hour < 10) ? 
                                    '0' + this.state.hour :
                                (this.state.hour < 13) ?
                                this.state.hour :
                                (this.state.hour === 24) ?
                                    '00' : this.state.hour - 12 }:</span>
                    <span>{(this.state.minute > 9) ? this.state.minute : '0' + this.state.minute}</span>
                    <span> </span>
                    <span>{(this.state.ampm === '24') ?
                                '' :
                                (this.state.hour < 13) ?
                                    'AM' : 'PM'}</span>
                </div>            
            </div>
            <div className="mt-2">
                <ToggleButton onToggle={this.handleToggle}/>
            </div>
        </div>
        )
    }
}

Clock.propTypes = {
    hour: PropTypes.number,
    minute: PropTypes.number
}

export default Clock