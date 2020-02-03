import axios from 'axios';

export function fetchDefaultSubscriptionData() {
  return function (dispatch) {
    axios.get('/api/current')
      .then((response) => {
        debugger;
        dispatch({ type: 'RECEIVED_DEFAULT_SUBSCRIPTION', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_DEFAULT_SUBSCRIPTION_ERROR', payload: err });
      });
  };
}
