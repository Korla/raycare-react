import * as React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, children }: any) => (
  <Link
    to={
      filter === 'SHOW_ALL' ? '/' : filter
    }
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

export default FilterLink;