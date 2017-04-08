import * as React from 'react';
import { Link } from 'react-router';
import { BookingState } from './state';

export default class BookingApp extends React.Component<BookingState, void> {
  render() {
    return (
      <div>
        <Link to="/booking/nameandage" activeClassName="active">Name and age</Link>
        {this.props.children}
      </div>
    );
  }
}
