import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Panel } from '../../../common';
import { BookingState } from '../state';
import { addAgeDelayed } from '../actions';

interface NameAndAgeProps {
  name: string;
  age: number;
}

interface NameAndAgeDispatch {
  addAge: () => void;
}

class NameAndAge extends React.Component<NameAndAgeProps & NameAndAgeDispatch, void> {
  render() {
    return (
      <Panel title="Name and age">
        <div>
          Name: {this.props.name}, Age: {this.props.age}
          <button onClick={this.props.addAge}>Add</button>
        </div>
      </Panel>
    );
  }
}

const mapStateToProps = ({ name, age }: BookingState): NameAndAgeProps => ({ name, age });

const mapDispatchToProps = (dispatch: Dispatch<void>): NameAndAgeDispatch => {
  return {
    addAge: () => {
      dispatch(addAgeDelayed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameAndAge);
