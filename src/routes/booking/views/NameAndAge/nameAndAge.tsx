import * as React from 'react';
import { Panel } from '../../../../common';

export interface NameAndAgeProps {
  name: string;
  age: number;
}

export interface NameAndAgeDispatch {
  addAge: () => void;
}

export class NameAndAge extends React.Component<NameAndAgeProps & NameAndAgeDispatch, void> {
  render() {
    return (
      <Panel title="Name and age">
        <div>
          <span>
            Name: {this.props.name}, Age: {this.props.age}
          </span>
          <button onClick={this.props.addAge}>Add</button>
        </div>
      </Panel>
    );
  }
}
