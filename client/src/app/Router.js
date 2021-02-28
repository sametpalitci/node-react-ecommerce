import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from "./screens/RegisterScreen";

const Router = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={HomeScreen}
                />
                <Route
                    exact
                    path="/account/login"
                    render={LoginScreen}
                />
                <Route
                    exact
                    path="/account/register"
                    render={RegisterScreen}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
