import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UpdateSubscription from '../components/UpdateSubscription/UpdateSubscription';

configure({ adapter: new Adapter() });
const savedSubscription = {plan: 'good', name : 'Good', seats: 5, price:50 };
const previewSubscription = {plan: 'good', name : 'Good', seats: 5, price:50 };

describe('UpdateSubscription component', () => {
  test('renders', () => {
    const wrapper = shallow(<UpdateSubscription savedSubscription previewSubscription />);
    expect(wrapper.exists()).toBe(true);
  });
});
