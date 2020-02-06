import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import {
  createMuiTheme, ThemeProvider, withStyles, makeStyles,
} from '@material-ui/core/styles';
import SubscriptionInfo from '../SubscriptionInfo/SubscriptionInfo';
import './SubmittedScreen.css';

class SubmittedScreen extends React.Component {
  render() {
    const BackButton = withStyles({
      root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        color: 'white',
        backgroundColor: '#26c6da',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#80deea',
          borderColor: '#80deea',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0097a7',
          borderColor: '#0097a7',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      },
    })(Button);
    const { newSubscription, oldSubscription } = this.props;
    debugger;
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
