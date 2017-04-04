import { combineReducers } from 'redux';
import { Actions, VisibilityFilters } from './actions';
import { ITodo } from './state';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state: string = SHOW_ALL, action: any) {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

function isOn(state: boolean = false, action: any) {
  switch (action.type) {
    case Actions.SET_LIGHT:
      return action.isOn;
    default:
      return state;
  }
};

let id = 0;
function todos(state: ITodo[] = [], action: any) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: id++
        }
      ];
    case Actions.TOGGLE_TODO:
      return state.map((todo: ITodo, index) => {
        if (index === action.index) {
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
  todos,
  isOn
});

export default todoApp;