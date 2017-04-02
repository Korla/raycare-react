import { combineReducers } from 'redux';
import { AddTodoAction, ToggleTodoAction, SetVisibilityFilterAction, VisibilityFilters } from './actions';
import { ITodo } from './state';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state: string = SHOW_ALL, action: SetVisibilityFilterAction) {
  switch (action.type) {
    case SetVisibilityFilterAction.TYPE:
      return action.filter;
    default:
      return state;
  }
};

let id = 0;
function todos(state: ITodo[] = [], action: AddTodoAction | ToggleTodoAction) {
  switch (action.type) {
    case AddTodoAction.TYPE:
      return [
        ...state,
        {
          text: (action as AddTodoAction).text,
          completed: false,
          id: id++
        }
      ];
    case ToggleTodoAction.TYPE:
      return state.map((todo: ITodo, index) => {
        if (index === (action as ToggleTodoAction).index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;