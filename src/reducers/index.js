import { combineReducers } from 'redux';
import reducer from './someReducer';

export default combineReducers({
  data: reducer,
});
