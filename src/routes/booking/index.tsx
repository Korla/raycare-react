import * as React from 'react';
import { SubApp } from '../../common/index';
import NameAndAge from './nameAndAge';
import reducer from './reducer';

export interface BookingState {
  name: string;
  age: number;
  people: string[];
}

class BookingApp extends React.Component<BookingState, void> {
  render() {
    return <NameAndAge />;
  }
}

export default SubApp<BookingState, void>(reducer, BookingApp);
