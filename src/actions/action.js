import axios from 'axios';

export function fetchBeer() {
  return function (dispatch) {
    axios.get('https://api.punkapi.com/v2/beers/')
      .then((response) => {
        dispatch({ type: 'RECEIVED_BEER', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_STUFF_ERROR', payload: err });
      });
  };
}
