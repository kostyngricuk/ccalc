/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Footer from '@components/Footer';
import { render } from '@services/utils/test-utils';

it('Footer on the page', () => {
  const state = {
    user: {
      user: null,
      isLoading: true
    },
  };
  const wrapper = render(<Footer />, {
    preloadedState: state
  });

  const element = wrapper.getByTestId('footer');
  expect(element).toBeInTheDocument();
});