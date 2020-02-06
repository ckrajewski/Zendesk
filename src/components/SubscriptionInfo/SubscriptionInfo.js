import React from 'react';
import CurrencyFormat from 'react-currency-format';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import './SubscriptionInfo.css';

const SubscriptionInfo = (props) => {
  const {
    plan, name, seats, price, subscriptionName,
  } = props;
  debugger;
  return (
    <div styleName="container">
      <div styleName="header">
        <Typography variant="h6">
          {subscriptionName}
        </Typography>
      </div>
      <div styleName="row">
        <div>
          <InputLabel>
            Plan
          </InputLabel>
        </div>
        <div>
          {name}
        </div>
      </div>
      <div styleName="row">
        <div>
          <InputLabel>
            Seats
          </InputLabel>
        </div>
        <div>
          {seats}
        </div>
      </div>
      <div styleName="row">
        <div>
          <InputLabel>
            Price
          </InputLabel>
        </div>
        <div>
          <Typography variant="body1">
            <CurrencyFormat prefix="$" value={price} displayType="text" thousandSeparator />
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionInfo;
