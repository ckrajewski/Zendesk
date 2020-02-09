import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import { withStyles } from '@material-ui/core/styles';
import SubscriptionInfo from '../SubscriptionInfo/SubscriptionInfo';
import { buttonStyling } from '../../Utils';
import './SubmittedScreen.css';

/*
  Renders submitted screen
  Shows previous and updated subscriptions
*/
const SubmittedScreen = (props) => {
  const BackButton = withStyles({ root: buttonStyling })(Button);
  const { newSubscription, oldSubscription } = props;
  return (
    <div styleName="container">
      <div styleName="columns">
        <div styleName="oldSubscriptionContainer">
          <SubscriptionInfo {...oldSubscription} subscriptionName="Previous Subscription" />
        </div>
        <div styleName="newSubscriptionContainer">
          <SubscriptionInfo {...newSubscription} subscriptionName="Updated Subscription" />
        </div>
      </div>
      <div styleName="backButtonContainer">
        <BackButton component={Link} to="/">
            Back
        </BackButton>
      </div>
    </div>
  );
};

const mapToStateProps = state => ({
  oldSubscription: state.default.updateSubscriptionReducer.oldSubscription,
  newSubscription: state.default.updateSubscriptionReducer.newSubscription,
});


export default connect(mapToStateProps, null)(SubmittedScreen);
