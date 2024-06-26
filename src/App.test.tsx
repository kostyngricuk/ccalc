/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Loading pages', () => {
  it('Show loading spiner', () => {
    const wrapper = shallow(<App />);

    const element = wrapper.find('[data-testid="spiner"]');
    expect(element).not.toBe(null);
  });
})
