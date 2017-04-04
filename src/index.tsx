import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
const epicMiddleware = createEpicMiddleware(rootEpic);

let store = createStore(todoApp, applyMiddleware(epicMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);