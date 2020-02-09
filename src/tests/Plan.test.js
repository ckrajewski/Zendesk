import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Plan from '../components/Plan/Plan';

configure({ adapter: new Adapter() });

describe('Plan component', () => {
  test('renders', () => {
    const wrapper = shallow(<Plan />);
    expect(wrapper.exists()).toBe(true);
  });
});
