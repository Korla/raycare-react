import * as React from 'react';
import { Router, browserHistory, Route, Redirect } from 'react-router';
import { render } from 'react-dom';
import { app } from './common';

import './app.css';

import BookingRoutes from './routes/booking';
import HomeRoutes from './routes/home';

render(
  <div>
    <Router history={browserHistory}>
      <Redirect from="/" to="home" />
      <Route path="/" component={app}>
        {BookingRoutes}
        {HomeRoutes}
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);
