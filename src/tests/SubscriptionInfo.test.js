import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubscriptionInfo from '../components/SubscriptionInfo/SubscriptionInfo';

configure({ adapter: new Adapter() });

describe('SubscriptionInfo component', () => {
  test('renders', () => {
    const wrapper = shallow(<SubscriptionInfo />);
    expect(wrapper.exists()).toBe(true);
  });
});
