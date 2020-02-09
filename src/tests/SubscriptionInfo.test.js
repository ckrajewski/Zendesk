import React from 'react';
import Provider from 'react-redux';

import PropTypes from 'prop-types';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubscriptionInfo from '../components/SubscriptionInfo/SubscriptionInfo';

configure({ adapter: new Adapter() });

describe('SubscriptionInfo component', () => {
  test('renders', () => {
    // Subscription.contextTypes = {
  			// name: PropTypes.string,
    // };
    // const context = { name: 'foo' };
    const wrapper = shallow(<SubscriptionInfo />);
    expect(wrapper.exists()).toBe(true);
  });
});
