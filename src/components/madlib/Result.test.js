import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe('Result component', () => {
  it('renders Result', () => {
    const wrapper = shallow(<Result words={['hello', 'hi', 'hey']} />);
    expect(wrapper).toMatchSnapshot();
  });
});