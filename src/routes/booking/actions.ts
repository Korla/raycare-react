export const Actions = {
  SET_LIGHT: 'SET_LIGHT',
  SET_LIGHT_DELAYED: 'SET_LIGHT_DELAYED'
};

export function setLight(isOn: boolean) {
  return { type: Actions.SET_LIGHT, isOn };
}