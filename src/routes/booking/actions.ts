export const Actions = {
  ADD_AGE: 'ADD_AGE',
  ADD_AGE_DELAYED: 'ADD_AGE_DELAYED'
};

export function addAge() {
  return { type: Actions.ADD_AGE };
}

export function addAgeDelayed() {
  return { type: Actions.ADD_AGE_DELAYED };
}
