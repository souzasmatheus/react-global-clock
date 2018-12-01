import React from 'react'
import PropTypes from 'prop-types'
import ToggleButton from './toggleButton'

const Clock = ({hour=0, minute=0, ampm='24', onToggle=f=>f}) => (

    <div className="col-6 col-md-4">
        <div className="clockBorder p-3">
            <div className="clockDisplay">
                <span>{(ampm === '24') ?
                            (hour > 9) ? 
                                hour : '0' + hour :
                            (hour < 10) ? 
                                '0' + hour :
                            (hour < 13) ?
                                hour :
                            (hour === 24) ?
                                '00' : hour - 12 }:</span>
                <span>{(minute > 9) ? minute : '0' + minute}</span>
                <span> </span>
                <span>{(ampm === '24') ?
                            '' :
                            (hour < 13) ?
                                'AM' : 'PM'}</span>
            </div>            
        </div>
        <div className="mt-2">
            <ToggleButton onToggle={onToggle}/>
        </div>
    </div>
    
)

Clock.propTypes = {
    hour: PropTypes.number,
    minute: PropTypes.number,
    ampm: PropTypes.string
}

export default Clock