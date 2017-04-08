import { connect, Dispatch } from 'react-redux';
import { setLightDelayed } from '../actions';
import Test from '../components/Test';
import { State } from '../state';

const mapStateToProps = (state: State) => {
  return {
    isOn: state.isOn
  };
};

const mapDispatchToProps = (dispatch: Dispatch<void>, ownProps: any) => {
  return {
    onClick: (isOn: boolean) => {
      dispatch(setLightDelayed(isOn));
    }
  };
};

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

export default TestContainer;