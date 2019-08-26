import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import history from '../history'


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
            <Header />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;