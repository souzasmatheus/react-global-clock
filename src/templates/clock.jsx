import React from 'react'
import PropTypes from 'prop-types'

const Clock = ({hour='00', minute='00', ampm=' '}) => (
    <div>
        <span>{hour}:</span>
        <span>{minute}</span>
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