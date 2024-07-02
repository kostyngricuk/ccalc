/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { defaultMockUser, render } from 'utils/test-utils';
import Header from '.';

describe('Header tests', () => {
  it('Header on the page', () => {
    const state = {
      user: {
        user: null,
        isLoading: true
      }
    };
    const wrapper = render(<Header />, {
      preloadedState: state
    });
    const element = wrapper.getByTestId('header');
    expect(element).toBeInTheDocument();
  });

  it('Show menu for authorized users', () => {
    const state = {
      user: {
        isLoading: false,
        user: defaultMockUser,
      },
    };
    const wrapper = render(<Header />, {
      preloadedState: state
    });
    const element = wrapper.getByTestId('nav');
    expect(element).toBeInTheDocument();
  });
})