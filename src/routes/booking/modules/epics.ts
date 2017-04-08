import 'rxjs';
import { combineEpics, ActionsObservable } from 'redux-observable';
import { Actions, addAge } from '../actions';

const isOnEpic = (action$: ActionsObservable<any>) =>
  action$
    .filter(action => action.type === Actions.ADD_AGE_DELAYED)
    .delay(500)
    .map(addAge);

export const epics = combineEpics(
  isOnEpic
);
