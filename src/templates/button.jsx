import React from 'react'
import PropTypes from 'prop-types'

const Button = ({styles='success', children='BTN', type='button'}) => (
    <button className={'btn btn-' + styles} type={type}>
        {children}
    </button>
)

Button.propTypes = {
    styles: PropTypes.string,
    children: PropTypes.string,
    type: PropTypes.string
}

export default Button