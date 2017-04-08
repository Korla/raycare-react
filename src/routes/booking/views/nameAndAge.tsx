import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { BookingState } from '../index';
import { addAge } from '../actions';

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
      <div>
        Name: {this.props.name}, Age: {this.props.age}
        <button onClick={this.props.addAge}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = ({ name, age }: BookingState) => ({ name, age });

const mapDispatchToProps = (dispatch: Dispatch<void>) => {
  return {
    addAge: () => {
      dispatch(addAge());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameAndAge);
