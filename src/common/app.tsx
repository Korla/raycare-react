import * as React from 'react';
import { Link } from 'react-router';

export default (props: any) => (
  <div>
    <Link to="/" activeClassName="active">Home</Link>
    <Link to="/booking" activeClassName="active">Booking</Link>
    {props.children}
  </div>
);