import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import SubscriptionInfo from '../SubscriptionInfo/SubscriptionInfo';
import { sendOldAndNewSubscriptionData } from '../../actions/action';
import './SubmittedScreen.css';

class SubmittedScreen extends React.Component {
  render() {
    const { updateSubscriptionData } = this.props;
    if (!updateSubscriptionData) {
      return (<div />);
    }
    const { newSubscriptionData, oldSubscriptionData } = updateSubscriptionData;
    debugger;
    return (
      <div>
        <div styleName="columns">
          <SubscriptionInfo {...oldSubscriptionData} />
          <SubscriptionInfo {...newSubscriptionData} />
        </div>
        <Button component={Link} to="/" onClick={this.handleUpdateSubscription}>
        Back
        </Button>
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
