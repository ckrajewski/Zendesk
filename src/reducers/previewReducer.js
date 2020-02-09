export default function reducer(state = {
  fetching: false,
  subscription: {},
}, action) {
  switch (action.type) {
    case 'RECEIVED_PREVIEW_SUBSCRIPTION':
    {
      return { ...state, fetched: true, subscription: action.payload };
    }
    case 'RECEIVED_PREVIEW_SUBSCRIPTION_ERROR':
    {
      return { ...state, fetched: false, data: action.payload };
    }
  }
  return state;
}
