import React from 'react';
import {
  createMuiTheme, ThemeProvider, withStyles, makeStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import { cyan } from '@material-ui/core/colors/';
import { areSubscriptionsEqual } from '../../Utils';
// const cx = classNames.bind(styles);

const UpdateSubscription = (props) => {
  debugger;
  const SubmittedButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
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

  const { savedSubscription, previewSubscription } = props;
  const buttonDisabled = areSubscriptionsEqual(savedSubscription, previewSubscription);
  debugger;
  return (
    <div>
      <SubmittedButton disabled={buttonDisabled} variant="contained" color="primary" component={Link} to={{ type: 'SUBMITTEDSCREEN', payload: { previewSubscription } }}>
          Update Subscription
      </SubmittedButton>
    </div>
  );
};
export default UpdateSubscription;
