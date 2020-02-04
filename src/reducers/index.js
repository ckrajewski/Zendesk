import { combineReducers } from 'redux';
import subscriptionReducer from './subscriptionReducer';
import previewReducer from './previewReducer';

export { default as page } from './page';

export default combineReducers({
  subscriptionReducer, previewReducer,
});
