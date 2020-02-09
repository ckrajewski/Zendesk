export default function reducer(state = {
  fetching: false,
  oldSubscription: {},
  newSubscription: {},
}, action) {
  switch (action.type) {
    case 'RECEIVED_UPDATED_SUBSCRIPTION':
    {
      return {
        ...state,
        fetched: true,
        oldSubscription: action.payload.oldSubscription,
        newSubscription: action.payload.newSubscription,
      };
    }
  }
  return state;
}
