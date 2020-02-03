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
    case 'RECEIVED_WEATHER_STUFF_ERROR':
    {
      return { ...state, fetched: false, data: action.payload };
    }
  }
  return state;
}
