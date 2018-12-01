import React from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'

import Clock from '../templates/clock'
import About from '../templates/about'

const Routes = ({hour, minute, onToggle}) => (
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => <Clock hour={hour} minute={minute}onToggle={onToggle}/>}/>
            <Route path="/about" render={() => <About />} />
        </ Switch>
    </HashRouter>
)

export default Routes