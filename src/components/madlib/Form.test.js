import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('renders Form', () => {
    const wrapper = shallow(<Form onSubmit='hi' />);
    expect(wrapper).toMatchSnapshot();
  });
});