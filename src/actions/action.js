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

export function updateSubscriptionData() {
  return function (dispatch) {
    axios.put('/api/current')
      .then((response) => {
        debugger;
        dispatch({ type: 'RECEIVED_UPDATED_SUBSCRIPTION', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_UPDATED_SUBSCRIPTION_ERROR', payload: err });
      });
  };
}

export function previewSubscriptionData(previewData) {
  return function (dispatch) {
    axios.post('/api/preview', { previewData })
      .then((response) => {
        debugger;
        dispatch({ type: 'RECEIVED_PREVIEW_SUBSCRIPTION', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_PREVIEW_SUBSCRIPTION_ERROR', payload: err });
      });
  };
}

export function sendOldAndNewSubscriptionData(oldSubscriptionData, newSubscriptionData) {
  return function (dispatch) {
    debugger;
    axios.put('/api/current', { newSubscriptionData })
      .then((response) => {
        debugger;
        dispatch({ type: 'RECEIVED_SUBMITTED_SCREEN', payload: { oldSubscriptionData, newSubscriptionData } });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_SUBMITTED_SCREEN_ERROR', payload: err });
      });
  };
}
