import { connect, Dispatch } from 'react-redux';
import { BookingState } from '../../state';
import { addAgeDelayed } from '../../actions';
import { NameAndAge, NameAndAgeDispatch, NameAndAgeProps } from './nameAndAge';

const mapStateToProps = ({ name, age }: BookingState): NameAndAgeProps => ({ name, age });

const mapDispatchToProps = (dispatch: Dispatch<void>): NameAndAgeDispatch => {
  return {
    addAge: () => {
      dispatch(addAgeDelayed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameAndAge);