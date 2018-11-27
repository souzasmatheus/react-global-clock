import React from 'react'

const Button = ({styles, children, type}) => (
    <button className={'btn btn-' + styles} type={type}>
        {children}
    </button>
)

export default Button