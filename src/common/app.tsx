import * as React from 'react';
import Header from './Header';

const style = {
  position: 'absolute',
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column' as 'column'
};

export const app = (props: any) => (
  <div style={style}>
    <Header />
    {props.children}
  </div>
);
