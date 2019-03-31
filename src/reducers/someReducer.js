export default function reducer(state = {
  fetching: false,
  beer: null,
}, action) {
  switch (action.type) {
    case 'RECEIVED_BEER': {
      return { ...state, fetched: true, beer: action.payload };
    }
    case 'RECEIVED_WEATHER_STUFF_ERROR': {
      return { ...state, fetched: false, beer: action.payload };
    }
  }
  return state;
}
