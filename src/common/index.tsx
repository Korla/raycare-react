import * as React from 'react';
import { Reducer } from 'redux';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';

export function SubApp<ReducerState, Props>(
  reducer: Reducer<ReducerState>,
  WrappedApp: new () => React.Component<ReducerState, void>
) {
  return class extends React.Component<Props, ReducerState> {
    private store: Store<ReducerState>;

    constructor(props: Props) {
      super(props);
      this.store = createStore<ReducerState>(reducer);
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
