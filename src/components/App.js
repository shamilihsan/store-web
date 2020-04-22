import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Item from './Item'
import Header from './Header'
import Cart from './Cart'
import Login from './Login'
import Orders from './Orders'
import history from '../history'
import Vendor from './Vendor'


const App = () => {
    return (
        <div className="container-fluid">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/vendor" exact component={Vendor}></Route>
                    <Route path="/orders" exact component={Orders}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/cart" exact component={Cart}></Route>
                    <Route path="/shop/:id" exact component={Item}></Route>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;