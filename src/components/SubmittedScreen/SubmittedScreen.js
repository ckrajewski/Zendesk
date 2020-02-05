import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import SubscriptionInfo from '../SubscriptionInfo/SubscriptionInfo';
import './SubmittedScreen.css';

class SubmittedScreen extends React.Component {
  render() {
    const { newSubscription, oldSubscription } = this.props;
    debugger;
    return (
      <div>
        <div styleName="columns">
          <SubscriptionInfo {...oldSubscription} />
          <SubscriptionInfo {...newSubscription} />
        </div>
        <Button component={Link} to="/">
        Back
        </Button>
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  debugger;
  return ({
    oldSubscription: state.default.updateSubscriptionReducer.oldSubscription,
    newSubscription: state.default.updateSubscriptionReducer.newSubscription,
  });
};

export default connect(mapToStateProps, null)(SubmittedScreen);
