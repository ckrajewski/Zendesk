import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Subscription from '../components/Subscription/Subscription';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  default: {
    currentSubscriptionReducer: {
      subscription: {},
    },
    previewSubscriptionReducer: {
      subscription: {},
    },
  },
};

describe('Subscription component', () => {
  test('renders', () => {
  	const store = mockStore(storeStateMock);

    const wrapper = shallow(<Subscription store={store} />).shallow();
    expect(wrapper.exists()).toBe(true);
  });
});
