import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" render={() => <Redirect to="/login" />} />
        </Switch>
    </Router>
);

export default Routes;
