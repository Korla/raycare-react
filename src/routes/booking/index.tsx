import * as React from 'react';
import { Route } from 'react-router';
import { SubApp } from '../../common';
import { reducers, epics } from './modules';
import BookingApp from './app';
import { BookingState } from './state';
import NameAndAge from './views/nameAndAge';

const BookingSubApp = SubApp<BookingState, void>(reducers, epics, BookingApp);

export default (
  <Route path="/booking" component={BookingSubApp}>
    <Route path="/booking/nameandage" component={NameAndAge} />
  </Route>
);
