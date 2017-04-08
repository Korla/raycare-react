export const Actions = {
  ADD_AGE: 'ADD_AGE',
  SET_LIGHT: 'SET_LIGHT',
  SET_LIGHT_DELAYED: 'SET_LIGHT_DELAYED'
};

export function addAge() {
  return { type: Actions.ADD_AGE };
}

export function setLight(isOn: boolean) {
  return { type: Actions.SET_LIGHT, isOn };
}