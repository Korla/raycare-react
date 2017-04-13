import * as React from 'react';
import { Reducer, createStore, Store, applyMiddleware } from 'redux';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { Provider } from 'react-redux';

export function subApp<ReducerState, Props>(
  reducer: Reducer<ReducerState>,
  epic: Epic<ReducerState, Props>,
  WrappedApp: new () => React.Component<ReducerState, void>
) {
  return class extends React.Component<Props, ReducerState> {
    private store: Store<ReducerState>;

    constructor(props: Props) {
      super(props);
      const epicMiddleware = createEpicMiddleware(epic);
      this.store = createStore<ReducerState>(reducer, applyMiddleware(epicMiddleware));
    }

    render() {
      return (
        <Provider store={this.store}>
          <WrappedApp {...this.props} />
        </Provider>
      );
    }
  };
}
