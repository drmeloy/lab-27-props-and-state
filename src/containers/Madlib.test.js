import React from 'react';
import { shallow } from 'enzyme';
import Madlib from './Madlib';

describe('Madlib component', () => {
  it('renders Madlib', () => {
    const wrapper = shallow(<Madlib />);
    expect(wrapper).toMatchSnapshot();
  });
});