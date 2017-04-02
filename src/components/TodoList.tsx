import * as React from 'react';
import Todo from './Todo';
import { ITodo } from '../state';
const PropTypes = React.PropTypes;

export interface TodoListProps {
  todos: ITodo[];
  onTodoClick: (id: number) => void;
}

export default class TodoList extends React.Component<TodoListProps, void> {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
  };

  constructor(props: TodoListProps) {
    super(props);
  }

  public render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => this.props.onTodoClick(todo.id)}
            />
          )
        )}
      </ul>
    );
  }
}