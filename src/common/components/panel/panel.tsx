import * as React from 'react';
import style from './style';

interface PanelProps {
  title: string;
}

export class Panel extends React.Component<PanelProps, void> {
  constructor(props: PanelProps) {
    super(props);
  }

  render() {
    return (
      <div style={style.root}>
        <div style={style.header} className="panel-header">
          <span style={{ ...style.title, ...style.selectedTitle }}>
            {this.props.title}
          </span>
        </div>
        <div style={style.body}>
          {this.props.children}
        </div>
      </div>
    );
  }
}