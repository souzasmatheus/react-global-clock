import React from 'react'

const Button = ({styles, children}) => (
    <button className={'btn btn-' + styles}>
        {children}
    </button>
)

export default Button