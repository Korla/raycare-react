/*
 * actions
 */

export const Actions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  SET_LIGHT: 'SET_LIGHT',
  SET_LIGHT_DELAYED: 'SET_LIGHT_DELAYED'
};

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
  return { type: Actions.ADD_TODO, text };
}

export function toggleTodo(index: number) {
  return { type: Actions.TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter: string) {
  return { type: Actions.SET_VISIBILITY_FILTER, filter };
}

export function setLight(isOn: boolean) {
  return { type: Actions.SET_LIGHT, isOn };
}

export function setLightDelayed(isOn: boolean) {
  return { type: Actions.SET_LIGHT_DELAYED, isOn };
}