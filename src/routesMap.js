import { updateSubscriptionData } from './actions/action';

export default {
  SUBMITTEDSCREEN: {
    /*
      Handles updating subscription data when user hits update subscription
    */
    path: '/submittedscreen',
    thunk: async (dispatch, getState) => {
      const { location } = getState();
      const { previewSubscription } = location.payload;

      // todo: add agency to path to support multiple agencies
      dispatch(updateSubscriptionData(previewSubscription));
    },
  },
  /*
      Navigates to subscription page
    */
  SUBSCRIPTION: '/',
};
