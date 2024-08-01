/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Root from 'pages/index';
import { render, waitFor } from 'utils/test-utils';
import { defaultMockUser } from 'constants/mocks';

describe('Loading', () => {
  it('Show loading spiner', () => {
    const wrapper = render(<Root />);

    const element = wrapper.queryByTestId('loader');
    expect(element).toBeInTheDocument();
  });

  it('Show main content', async () => {
    const state = {
      user: {
        user: defaultMockUser,
        isLoading: false
      }
    }
    const wrapper = render(<Root />, {
      preloadedState: state
    });

    await waitFor(() => {
      const element = wrapper.queryByTestId('main');
      expect(element).toBeInTheDocument();
    }, {
      timeout: 5000
    })
  });
})
