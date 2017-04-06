import { connect, Dispatch } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { State, ITodo } from '../state';

const getVisibleTodos = (todos: ITodo[], filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
    default:
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = (state: State, ownProps: any) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<void>) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;