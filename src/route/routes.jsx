import React from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'

import Clock from '../presentation/clock'

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Clock}/>
        </ Switch>
    </HashRouter>
)

export default Routes