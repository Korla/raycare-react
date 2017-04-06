import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { reducers, epics } from './modules';
import App from './components/App';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(epics);

let store = createStore(reducers, applyMiddleware(epicMiddleware));

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);