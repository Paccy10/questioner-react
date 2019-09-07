import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from '../components/auth/Signup';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/signup' component={Signup} />
    </Switch>
  </Router>
);

export default Routes;
