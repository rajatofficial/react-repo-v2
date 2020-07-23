import React from "react";
import Login from '../Login/Login';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import ContactPage from "../Form/ContactPage";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/form" component={ContactPage}></Route>
                <PrivateRoute path="/home" component={Home}></PrivateRoute>
            </Switch>
        </Router>
    )
}

export default Routes;