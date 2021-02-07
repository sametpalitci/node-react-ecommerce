import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';

const Router = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={HomeScreen}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
