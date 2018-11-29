import React from 'react'
import PropTypes from 'prop-types'

const Clock = ({hour='00', minute='00', ampm=' '}) => (
    <div>
        <span>{(hour > 9 || hour === '00') ? hour : '0' + hour}:</span>
        <span>{(minute > 9 || minute === '00') ? minute : '0' + minute}</span>
        <span> </span>
        <span>{ampm}</span>
    </div>
)

Clock.propTypes = {
    hour: PropTypes.string,
    minute: PropTypes.string,
    ampm: PropTypes.string
}

export default Clock