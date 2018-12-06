import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({site, children}) => (
    <div className="icon d-inline-block mx-1 mt-2 mb-5 pt-3">
        <a href={site} rel="noopener noreferrer" target="_blank">
            <i className={children}></i>
        </a>
    </div>
)

Icon.propTypes = {
    site: PropTypes.string,
    children: PropTypes.string
}

export default Icon