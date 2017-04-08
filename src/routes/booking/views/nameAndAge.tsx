import * as React from 'react';
import { connect } from 'react-redux';
import { BookingState } from '../index';

class NameAndAge extends React.Component<{ name: string, age: number }, void> {
  render() {
    return <div>Name: {this.props.name}, Age: {this.props.age}</div>;
  }
}

const mapStateToProps = ({ name, age }: BookingState) => ({ name, age });

export default connect(mapStateToProps)(NameAndAge);
