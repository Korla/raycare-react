import * as React from 'react';
import { Link } from 'react-router-dom';

const style = {
  root: {
    display: 'flex',
    background: '#777',
    paddingLeft: 40
  },
  link: {
    padding: 10,
    color: 'white'
  }
};

export default (props: any) => (
  <div style={style.root}>
    <Link style={style.link} to="/home">Home</Link>
    <Link style={style.link} to="/booking">Booking</Link>
  </div>
);