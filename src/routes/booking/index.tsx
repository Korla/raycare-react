import * as React from 'react';
import { Route } from 'react-router';
import { SubApp } from '../../common';
import { reducers, epics } from './modules';
import BookingApp from './app';
import NameAndAge from './views/nameAndAge';

export interface BookingState {
  name: string;
  age: number;
  people: string[];
}

const ConnectedBookingApp = SubApp<BookingState, void>(reducers, epics, BookingApp);

export default (
  <Route path="/booking" component={ConnectedBookingApp}>
    <Route path="/booking/nameandage" component={NameAndAge} />
  </Route>
);
