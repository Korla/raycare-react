import * as React from 'react';
import './index.css';

const style = {
  background: '#333',
  padding: 10,
  display: 'flex',
  flex: 1
};

export class Page extends React.Component<void, void> {
  render() {
    return (
      <div style={style} className="rc-page">
        {this.props.children}
      </div>
    );
  }
}