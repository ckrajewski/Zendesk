import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CurrencyFormat from 'react-currency-format';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import './SubscriptionInfo.css';

const SubscriptionInfo = (props) => {
  const {
    plan, name, seats, price, subscriptionName,
  } = props;
  const useStyles = makeStyles(theme => ({
    updatedStyling: {
      fontWeight: 'bold',
      color: '#26c6da',
    },
    previousStyling: {
      fontWeight: 'bold',
      color: 'lightgrey',
    },
  }));
  const classes = useStyles();
  const { updatedStyling, previousStyling } = classes;
  const valueStyling = subscriptionName === 'Updated Subscription' ? updatedStyling : previousStyling;
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
          <Typography variant="body1" className={valueStyling}>
            {name}
          </Typography>
        </div>
      </div>
      <div styleName="row">
        <div>
          <InputLabel>
            Seats
          </InputLabel>
        </div>
        <div>
          <Typography variant="body1" className={valueStyling}>
            {seats}
          </Typography>
        </div>
      </div>
      <div styleName="row">
        <div>
          <InputLabel>
            Price
          </InputLabel>
        </div>
        <div>
          <Typography variant="body1" className={valueStyling}>
            <CurrencyFormat prefix="$" value={price} displayType="text" thousandSeparator />
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionInfo;
