import * as React from 'react';

interface TabProps {
  title: string;
}

export class Tab extends React.Component<TabProps, void> {
  public title: string;
  constructor(props: TabProps) {
    super(props);
    this.title = props.title;
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}