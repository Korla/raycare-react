import { connect, Dispatch } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

interface Props { filter: string; }

const mapStateToProps = (state: { visibilityFilter: string; }, ownProps: Props) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: Dispatch<void>, ownProps: Props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;