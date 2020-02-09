import React from 'react';
import Provider from 'react-redux';

import PropTypes from 'prop-types';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Subscription from '../components/Subscription/Subscription';

configure({ adapter: new Adapter() });

describe('Subscription component', () => {
  test('renders', () => {
    // Subscription.contextTypes = {
  			// name: PropTypes.string,
    // };
    // const context = { name: 'foo' };
    const wrapper = shallow(<Subscription />, store = { store });
    expect(wrapper.exists()).toBe(true);
  });
});
