import 'rxjs';
import { combineEpics, ActionsObservable } from 'redux-observable';
import { Actions, setLight } from './actions';

const isOnEpic = (action$: ActionsObservable<any>) =>
  action$
    .filter(action => action.type === Actions.SET_LIGHT_DELAYED)
    .delay(500)
    .map(action => setLight(action.isOn));

const rootEpic = combineEpics(
  isOnEpic
);

export default rootEpic;
