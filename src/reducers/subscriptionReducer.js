export default function reducer(state = {
  fetching: false,
  subscriptionData: {},
}, action) {
  switch (action.type) {
    case 'RECEIVED_DEFAULT_SUBSCRIPTION':
    {
      debugger;
      return { ...state, fetched: true, subscriptionData: action.payload };
    }
    case 'UPDATED_DEFAULT_SUBSCRIPTION':
    {
      debugger;
      return { ...state, fetched: true, subscriptionData: action.payload };
    }
    case 'RECEIVED_DEFAULT_SUBSCRIPTION_ERROR':
    {
      return { ...state, fetched: false, subscriptionData: action.payload };
    }
    case 'RECEIVED_SUBMITTED_SCREEN':
    {
      debugger;
      return { ...state, fetched: true, subscriptionSubmittedData: action.payload };
    }
  }
  return state;
}
