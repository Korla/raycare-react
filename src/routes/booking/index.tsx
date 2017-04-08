import * as React from 'react';
import { Route } from 'react-router';
import { SubApp } from '../../common/index';
import reducer from './reducer';
import BookingApp from './app';
import NameAndAge from './views/nameAndAge';

export interface BookingState {
  name: string;
  age: number;
  people: string[];
}

const ConnectedBookingApp = SubApp<BookingState, void>(reducer, BookingApp);

export default (
  <Route path="/booking" component={ConnectedBookingApp}>
    <Route path="/booking/nameandage" component={NameAndAge} />
  </Route>
);
