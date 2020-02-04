import { combineReducers } from 'redux';
import subscriptionReducer from './subscriptionReducer';
import previewReducer from './previewReducer';

export default combineReducers({
  subscriptionReducer, previewReducer,
});
