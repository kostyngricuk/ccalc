/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Providers from '@services/utils/test-utils';
import Header from '@components/Header';
import { Genders } from '@services/types/user';

describe('Header tests', () => {
  const mockStore = configureStore([]);
  it('Header on the page', () => {
    const store = mockStore({
      user: {
        user: {},
      },
    });
    const wrapper = shallow(<Providers store={store}><Header /></Providers>);
    const element = wrapper.find('[data-testid="header"]');
    expect(element).not.toBe(null);
  });

  it('Show menu for authorized users', () => {
    const store = mockStore({
      user: {
        isLoading: false,
        user: {
          id: '',
          height: 180,
          weight: 83,
          weightGoal: 80,
          age: 26,
          gender: Genders.man,
          email: 'user@gmail.com',
          calorieWidget: {
            limit: 2000,
            eaten: 400,
          },
        },
      },
    });
    const wrapper = shallow(<Providers store={store}><Header /></Providers>);
    const element = wrapper.find('[data-testid="header-nav"]');
    expect(element).not.toBe(null);
  });
})