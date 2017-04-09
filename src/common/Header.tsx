import * as React from 'react';
import { Link } from 'react-router';

const style = {
  root: {
    display: 'flex',
    justifyContent: 'space-around' as 'space-around',
    background: '#777'
  },
  link: {
    padding: 10,
    color: 'white'
  }
};

export default (props: any) => (
  <div style={style.root}>
    <Link style={style.link} to="/" activeClassName="active">Home</Link>
    <Link style={style.link} to="/booking" activeClassName="active">Booking</Link>
  </div>
);