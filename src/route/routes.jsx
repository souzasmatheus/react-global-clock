import React from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'

import Clock from '../templates/clock'
import About from '../templates/about'

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => <Clock />}/>
            <Route path="/about" render={() => <About />} />
        </ Switch>
    </HashRouter>
)

export default Routes