import React from 'react'
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import Home from './Home';
import Meal from './Meal';

export default function index() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/meal" component={Meal} />
            </Switch>
        </Router>
    )
}
