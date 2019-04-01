import axios from 'axios';

export function fetchStuff() {
  return function (dispatch) {
    axios.get(URL)
      .then((response) => {
        dispatch({ type: 'RECEIVED_STUFF', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'RECEIVED_STUFF_ERROR', payload: err });
      });
  };
}
