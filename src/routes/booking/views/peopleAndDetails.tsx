import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { TabPanel, Tab } from '../../../common';
import { BookingState } from '../state';

interface PeopleAndDetailsProps {
  people: string[];
}

interface PeopleAndDetailsDispatch {
}

class PeopleAndDetails extends React.Component<PeopleAndDetailsProps & PeopleAndDetailsDispatch, void> {
  render() {
    return (
      <TabPanel>
        <Tab title="People">
          {this.props.people.map(person => (
            <div key={person}>
              {person}
            </div>
          ))}
        </Tab>
        <Tab title="Details">
          Details go here
        </Tab>
      </TabPanel>
    );
  }
}

const mapStateToProps = ({ people }: BookingState) => ({ people });

const mapDispatchToProps = (dispatch: Dispatch<void>) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleAndDetails);
