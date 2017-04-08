import * as React from 'react';
const PropTypes = React.PropTypes;

export interface TodoProps {
  onClick: React.EventHandler<React.MouseEvent<HTMLLIElement>>;
  completed: boolean;
  text: string;
}

export default class Todo extends React.Component<TodoProps, void> {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  };

  constructor(props: TodoProps) {
    super(props);
  }

  public render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    );
  }
}