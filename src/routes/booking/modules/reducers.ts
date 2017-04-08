import { combineReducers } from 'redux';
import { BookingState } from '../state';
import { Actions } from '../actions';

const name = (state: string = 'A name', action: any) => {
  return state;
};

const age = (state: number = 10, action: any) => {
  switch (action.type) {
    case Actions.ADD_AGE:
      return state + 1;
    default:
      return state;
  }
};

const people = (state: string[] = ['JB', 'HL'], action: any) => {
  return state;
};

export const reducers = combineReducers<BookingState>({ name, age, people });
