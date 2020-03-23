/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import AdminLayout from './layouts/Admin';

import { useStateValue } from './config/store';

const Component = () => {
  const [{ me }] = useStateValue();

  return (
    <Router>
      <Switch>
        {me ? (
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
        ) : (
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
        )}
        <Redirect from="/" to={me ? '/admin/index' : '/auth/login'} />
      </Switch>
    </Router>
  );
};

export default Component;
