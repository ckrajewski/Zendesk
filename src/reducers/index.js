import { combineReducers } from 'redux';
import initialSubscriptionReducer from './initialSubscriptionReducer';
import previewReducer from './previewReducer';
import updateSubscriptionReducer from './updateSubscriptionReducer';

export { default as page } from './page';

export default combineReducers({
  initialSubscriptionReducer, previewReducer, updateSubscriptionReducer,
});
