import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers, epics } from './modules';
import App from './components/App';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(epics);

let store = createStore(reducers, applyMiddleware(epicMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);