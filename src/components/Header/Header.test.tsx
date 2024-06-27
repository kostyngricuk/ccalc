/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';

import { defaultMockUser, Providers } from '@services/utils/test-utils';
import Header from '@components/Header';

describe('Header tests', () => {
  it('Header on the page', () => {
    const state = {
      user: {
        user: null,
        isLoading: true
      }
    };
    const wrapper = shallow(<Providers state={state}><Header /></Providers>);
    const element = wrapper.find('[data-testid="header"]');
    expect(element).not.toBe(null);
  });

  it('Show menu for authorized users', () => {
    const state = {
      user: {
        isLoading: false,
        user: defaultMockUser,
      },
    };
    const wrapper = shallow(<Providers state={state}><Header /></Providers>);
    const element = wrapper.find('[data-testid="header-nav"]');
    expect(element).not.toBe(null);
  });
})