import * as React from 'react';
import { Page } from '../../common/components/page/index';
import { Route } from 'react-router-dom';
import { Panel } from '../../common/components/panel/panel';

class HomeApp extends React.Component<void, void> {
  render() {
    return (
      <Page>
        <Panel title="Details">
          Details go here
        </Panel>
      </Page>
    );
  }
}

export default (
  <Route path="/home" component={HomeApp} />
);
