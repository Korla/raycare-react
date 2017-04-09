import * as React from 'react';
import { BookingState } from './state';
import { Page } from '../../common';
import NameAndAge from './views/nameAndAge';
import PeopleAndDetails from './views/peopleAndDetails';

export default class BookingApp extends React.Component<BookingState, void> {
  render() {
    return (
      <Page>
        <NameAndAge />
        <PeopleAndDetails />
      </Page>
    );
  }
}
