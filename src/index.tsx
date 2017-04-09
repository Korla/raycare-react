import * as React from 'react';
import { Router, browserHistory, Route } from 'react-router';
import { render } from 'react-dom';
import { app } from './common';

import './app.css';

import BookingRoutes from './routes/booking';

render(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={app}>
        {BookingRoutes}
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);
