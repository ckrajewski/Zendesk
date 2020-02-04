import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import { updateSubscriptionData } from '../../actions/action';

// const cx = classNames.bind(styles);

class UpdateSubscription extends React.Component {
  areSubscriptionsEqual = (savedSubscription, previewSubscription) => {
    debugger;
    const previewSubsciptionKeys = Object.keys(previewSubscription);
    for (const index in previewSubsciptionKeys) {
      const key = previewSubsciptionKeys[index];
      if (previewSubscription[key] !== savedSubscription[key]) {
        return false;
      }
    }
    return true;
  }

  handleUpdateSubscription = (event) => {

  }

  render() {
    const { savedSubscription, previewSubscription } = this.props;
    const buttonDisabled = this.areSubscriptionsEqual(savedSubscription, previewSubscription);
    debugger;
    return (
      <div>

        <Button disabled={buttonDisabled} component={Link} to={{ type: 'ROUTESCREEN', payload: { savedSubscription, previewSubscription } }} onClick={this.handleUpdateSubscription}>
        Update Subscription
        </Button>

      </div>
    );
  }
}

const mapToStateProps = (state) => {
  debugger;
  return ({
    updateSubscriptionData: state.default.subscriptionReducer.subscriptionData,
  });
};

const mapDispatchToProps = dispatch => ({
  updateSubscriptionData: () => dispatch(updateSubscriptionData()),

});

export default connect(mapToStateProps, mapDispatchToProps)(UpdateSubscription);
