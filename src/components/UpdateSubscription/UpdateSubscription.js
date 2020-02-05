import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import { areSubscriptionsEqual } from '../../Utils';
// const cx = classNames.bind(styles);

export default class UpdateSubscription extends React.Component {
  render() {
    const { savedSubscription, previewSubscription } = this.props;
    const buttonDisabled = areSubscriptionsEqual(savedSubscription, previewSubscription);
    debugger;
    return (
      <div>

        <Button disabled={buttonDisabled} component={Link} to={{ type: 'SUBMITTEDSCREEN', payload: { previewSubscription } }}>
        Update Subscription
        </Button>

      </div>
    );
  }
}
