import * as React from 'react';

const style = {
  background: '#777',
  padding: 10,
  display: 'flex',
  flexDirection: 'column' as 'column',
  flex: 1
};

export class Panel extends React.Component<void, void> {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}