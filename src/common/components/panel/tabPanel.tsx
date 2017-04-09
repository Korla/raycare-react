import * as React from 'react';
import style from './style';
import { Tab } from './tab';

interface TabPanelProps {
  selected?: number;
}

interface TabPanelState {
  selected: number;
}

export class TabPanel extends React.Component<TabPanelProps, TabPanelState> {
  constructor(props: TabPanelProps) {
    super(props);
    this.state = {
      selected: this.props.selected || 0
    };
  }

  render() {
    const selectedTab = this.props.children ? this.props.children[this.state.selected] : null;
    const tabs = this.props.children as Tab[];
    return (
      <div style={style.root}>
        <div style={style.header} className="panel-header">
          {tabs.map((tab, i) => {
            const tabStyle = {
              ...style.title,
              ...(tab === selectedTab ? style.selectedTitle : {})
            };
            return (
              <span style={tabStyle} key={tab.props.title} onClick={() => this.selectTab(i)}>
                {tab.props.title}
              </span>
            );
          })}
        </div>
        <div style={style.body}>
          {selectedTab}
        </div>
      </div>
    );
  }

  selectTab = (selected: number) => {
    this.setState({ selected });
  }
}