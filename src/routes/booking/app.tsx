import * as React from 'react';
import { BookingState } from './state';
import { Page, Panel } from '../../common';
import NameAndAge from './views/nameAndAge';

export default class BookingApp extends React.Component<BookingState, void> {
  render() {
    return (
      <Page>
        <NameAndAge />
        <Panel>Another panel</Panel>
      </Page>
    );
  }
}
