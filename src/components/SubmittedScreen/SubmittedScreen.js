import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import { sendOldAndNewSubscriptionData } from '../../actions/action';

class SubmittedScreen extends React.Component {
  render() {
    const { updateSubscriptionData } = this.props;
    debugger;
    return (
      <div>
        {oldSubscription.plan}
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  debugger;
  return ({
    updateSubscriptionData: state.default.subscriptionReducer.subscriptionSubmittedData,
  });
};

const mapDispatchToProps = dispatch => ({
  sendOldAndNewSubscriptionData: () => dispatch(sendOldAndNewSubscriptionData()),

});

export default connect(mapToStateProps, mapDispatchToProps)(SubmittedScreen);
