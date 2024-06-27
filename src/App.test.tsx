/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Root from '@pages/index';

describe('Loading', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
     wrapper = shallow(<Root />);
  })

  it('Show loading spiner', () => {
    const element = wrapper.find('Loader');
    expect(element.length).toBe(1);
  });

  it('Show main content', () => {
    setTimeout(() => {
      const element = wrapper.find('Main');
      expect(element.length).toBe(1);
    }, 3000);
  });
})
