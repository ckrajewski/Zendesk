import { sendOldAndNewSubscriptionData } from './actions/action';

export default {
  SUBMITTEDSCREEN: {
    /*
    Redux first router path syntax
    https://github.com/faceyspacey/redux-first-router/issues/83
    the : symbol signifies variables
    the ? after the : means an optional paramter variable
    ()* shows am optional parameter label
    */
    path: '/submittedscreen',
    thunk: async (dispatch, getState) => {
      debugger;
      const { location } = getState();
      const { savedSubscription, previewSubscription } = location.payload;

      // todo: add agency to path to support multiple agencies
      dispatch(
        sendOldAndNewSubscriptionData(
          savedSubscription,
          previewSubscription,
        ),
      );
    },
  },
  SUBSCRIPTION: '/',
};
