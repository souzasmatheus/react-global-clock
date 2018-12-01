import React from 'react'
import PropTypes from 'prop-types'

const Clock = ({hour=0, minute=0, ampm=' '}) => (

    <div className="col-6 col-md-4">
        <div className="clockBorder p-3">
            <div className="clockDisplay">
                <span>{(hour > 9) ? hour : '0' + hour}:</span>
                <span>{(minute > 9) ? minute : '0' + minute}</span>
                <span> </span>
                <span>{ampm}</span>
            </div>            
        </div>
    </div>
    
)

Clock.propTypes = {
    hour: PropTypes.number,
    minute: PropTypes.number,
    ampm: PropTypes.string
}

export default Clock