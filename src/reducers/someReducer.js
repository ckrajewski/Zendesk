export default function reducer(state = {
  fetching: false,
  data: {},
}, action) {
  switch (action.type) {
    case 'RECEIVED_STUFF':
    {
      return { ...state, fetched: true, data: action.payload };
    }
    case 'RECEIVED_WEATHER_STUFF_ERROR':
    {
      return { ...state, fetched: false, data: action.payload };
    }
  }
  return state;
}
