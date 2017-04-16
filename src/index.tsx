import * as React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import { App } from './common';

import './app.css';

import BookingRoutes from './routes/booking';
import HomeRoutes from './routes/home';

render(
  <BrowserRouter>
    <App>
      <Redirect from="/" to="home" />
      {BookingRoutes}
      {HomeRoutes}
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
