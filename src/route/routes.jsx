import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Clock from '../presentation/clock'

const Router = () => (
    <Router history={hashHistory}>
        <Route path="/home" component={Clock}/>
        <Route path="/about" component={About}/>
        <Redirect from="*" to="/home" />
    </Router>
)