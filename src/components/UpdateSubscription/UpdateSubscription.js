import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import { cyan } from '@material-ui/core/colors/';
import { areSubscriptionsEqual, buttonStyling } from '../../Utils';
import './UpdateSubscription.css';

/*
  Renders Update Subscription button
  Is disabled if current subscription is the same
  as the one saved on the server
*/

const UpdateSubscription = (props) => {
  const SubmittedButton = withStyles({ root: buttonStyling })(Button);
  const { savedSubscription, previewSubscription } = props;
  const buttonDisabled = areSubscriptionsEqual(savedSubscription, previewSubscription);
  return (
    <div>
      <SubmittedButton disabled={buttonDisabled} variant="contained" color="primary" component={Link} to={{ type: 'SUBMITTEDSCREEN', payload: { previewSubscription } }}>
          Update Subscription
      </SubmittedButton>
    </div>
  );
};
export default UpdateSubscription;
