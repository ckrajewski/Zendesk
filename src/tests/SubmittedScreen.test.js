import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SubmittedScreen from '../components/SubmittedScreen/SubmittedScreen';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  default: {
    updateSubscriptionReducer: {
      oldSubscription: {},
    },
    updateSubscriptionReducer: {
      newSubscription: {},
    },
  },
};

describe('SubmittedScreen component', () => {
  test('renders', () => {
  	const store = mockStore(storeStateMock);

    const wrapper = shallow(<SubmittedScreen store={store} />).shallow();
    expect(wrapper.exists()).toBe(true);
  });
});
