import React from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'

import Clock from '../templates/clock'
import About from '../templates/about'

const Routes = (props) => (
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => <Clock hour={props.hour} minute={props.minute}/>}/>
            <Route path="/about" render={() => <About />} />
        </ Switch>
    </HashRouter>
)

export default Routes