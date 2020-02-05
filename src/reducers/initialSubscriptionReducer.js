export default function reducer(state = {
  fetching: false,
  subscription: {},
  PLAN_NAMES: [],
}, action) {
  switch (action.type) {
    case 'RECEIVED_DEFAULT_SUBSCRIPTION':
    {
      debugger;
      return {
        ...state,
        fetched: true,
        subscription: action.payload.currentSubscription,
        planNames: action.payload.planNames,
      };
    }
    case 'RECEIVED_DEFAULT_SUBSCRIPTION_ERROR':
    {
      return { ...state, fetched: false, data: action.payload };
    }
  }
  return state;
}
