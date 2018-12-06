import React from 'react'
import {Switch, Route, HashRouter} from 'react-router-dom'

import {ClockPage, AboutPage} from '../templates/pageTemplate'

const Routes = ({hour, minute, increment, onSearch}) => (
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => <ClockPage onSearch={onSearch}
                                                hour={hour}
                                                minute={minute}
                                                increment={increment}/>}/>
            <Route path="/about" render={() => <AboutPage onSearch={onSearch}/>} />
        </ Switch>
    </HashRouter>
)

export default Routes