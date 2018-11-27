import React from 'react'

const Clock = ({hour='00', minute='00', second='00', ampm=' '}) => (
    <div>
        <span>{hour}</span>:
        <span>{minute}</span>:
        <span>{second}</span>
        <span> </span>
        <span>{ampm}</span>
    </div>
)

export default Clock