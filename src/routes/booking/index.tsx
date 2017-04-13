import * as React from 'react';
import { Route } from 'react-router';
import { subApp } from '../../common';
import { reducers, epics } from './modules';
import BookingApp from './app';
import { BookingState } from './state';

const BookingSubApp = subApp<BookingState, void>(reducers, epics, BookingApp);

export default (
  <Route path="/booking" component={BookingSubApp} />
);
