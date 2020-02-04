import { NOT_FOUND } from 'redux-first-router';

export const components = {
  SUBMITTEDSCREEN: 'SubmittedScreen',
  SUBSCRIPTION: 'Subscription',
};

export default (state = 'SUBSCRIPTION', action = {}) => components[action.type] || state;
