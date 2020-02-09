import { combineReducers } from 'redux';
import currentSubscriptionReducer from './currentSubscriptionReducer';
import previewSubscriptionReducer from './previewSubscriptionReducer';
import updateSubscriptionReducer from './updateSubscriptionReducer';

export { default as page } from './page';

export default combineReducers({
  currentSubscriptionReducer, previewSubscriptionReducer, updateSubscriptionReducer,
});
