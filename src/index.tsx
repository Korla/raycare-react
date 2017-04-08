import * as React from 'react';
import { Router, browserHistory, Route } from 'react-router';
import { render } from 'react-dom';
import App from './common/app';

import BookingRoutes from './routes/booking';

render(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {BookingRoutes}
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);
