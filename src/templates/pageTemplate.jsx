import React from 'react'
import Menu from './menu'

import Clock from '../templates/clock'
import About from '../templates/about'

const PageTemplate = ({children, onSearch}) => (
    <div className="App">
        <Menu onSearch={onSearch}/>
        <div className="container mt-5">
            <div className="row justify-content-center">
                {children}               
            </div>
        </div>
    </div>
)

export const ClockPage = ({onSearch, hour, minute, increment}) => (
    <PageTemplate onSearch={onSearch}>
        <Clock hour={hour}
                minute={minute}
                increment={increment}/>
    </PageTemplate>
)

export const AboutPage = ({onSearch}) => (
    <PageTemplate onSearch={onSearch}>
        <About />
    </PageTemplate>
)