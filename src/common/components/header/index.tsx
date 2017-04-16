import * as React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  root: {
    display: 'flex',
    background: '#777',
    paddingLeft: 40
  },
  link: {
    padding: 10,
    color: 'white',
    textDecoration: 'none'
  },
  active: {
    textDecoration: 'underline'
  }
};

const links = [
  {
    to: '/home',
    label: 'Home'
  },
  {
    to: '/booking',
    label: 'Booking'
  }
];

export default (props: any) => (
  <div style={style.root}>
    {links.map(({ to, label }) => (
      <NavLink
        key={to}
        style={style.link}
        activeStyle={style.active}
        to={to}>
        {label}
      </NavLink>
    ))}
  </div>
);