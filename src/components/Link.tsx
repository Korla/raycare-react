import * as React from 'react';
const PropTypes = React.PropTypes;

interface LinkProps {
  active: boolean;
  children: Node;
  onClick: () => void;
}

export default class Link extends React.Component<LinkProps, void> {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  };

  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a
        href="#"
        onClick={
          e => {
            e.preventDefault();
            this.props.onClick();
          }}
      >
        {this.props.children}
      </a>
    );
  }
}