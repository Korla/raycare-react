/*
 * actions
 */

class Action {
  constructor(public type: string) { }
}

export class AddTodoAction extends Action {
  public static TYPE = 'ADD_TODO';
  constructor(public text: string) {
    super(AddTodoAction.TYPE);
  }
}

export class ToggleTodoAction extends Action {
  public static TYPE = 'TOGGLE_TODO';
  constructor(public index: number) {
    super(ToggleTodoAction.TYPE);
  }
}

export class SetVisibilityFilterAction extends Action {
  public static TYPE = 'TOGGLE_TODO';
  constructor(public filter: string) {
    super(SetVisibilityFilterAction.TYPE);
  }
}

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */
export function addTodo(text: string) {
  return new AddTodoAction(text);
}

export function toggleTodo(index: number) {
  return new ToggleTodoAction(index);
}

export function setVisibilityFilter(filter: string) {
  return new SetVisibilityFilterAction(filter);
}