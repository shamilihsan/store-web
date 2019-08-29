import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Item from './Item'
import Header from './Header'
import history from '../history'


const App = () => {
    return (
        <div className="container-fluid">
            <Router history={history}>
            <Header />
                <Switch>
                    <Route path="/shop/:id" exact component={Item}></Route> 
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;