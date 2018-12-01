import React from 'react'
import PropTypes from 'prop-types'

const ToggleButton = ({onToggle=f=>f}) => (
    <button className="btn btn-secondary" type="button" 
    onClick={() => onToggle()}>
        12/24
    </button>
)

ToggleButton.propTypes = {
    onToggle: PropTypes.func
}

export default ToggleButton