import axios from 'axios';

/*
  calls the server for current subscription data
*/
export function fetchCurrentSubscriptionData() {
  return function (dispatch) {
    axios.get('/api/current')
      .then((response) => {
        dispatch({ type: 'RECEIVED_DEFAULT_SUBSCRIPTION', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_DEFAULT_SUBSCRIPTION_ERROR', payload: err });
      });
  };
}
/*
  calls the server to get subscription data for when user
  change subscription info on the subscription screen. To preview
  what the new subscription values would be
*/
export function previewSubscriptionData(previewData) {
  return function (dispatch) {
    axios.post('/api/preview', { previewData })
      .then((response) => {
        dispatch({ type: 'RECEIVED_PREVIEW_SUBSCRIPTION', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_PREVIEW_SUBSCRIPTION_ERROR', payload: err });
      });
  };
}

/*
  calls the server to subscription data. Fired when users hits
  the update subscription button
*/
export function updateSubscriptionData(newSubscriptionData) {
  return function (dispatch) {
    axios.put('/api/current', { newSubscriptionData })
      .then((response) => {
        dispatch({ type: 'RECEIVED_UPDATED_SUBSCRIPTION', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_UPDATED_SUBSCRIPTION_ERROR', payload: err });
      });
  };
}
