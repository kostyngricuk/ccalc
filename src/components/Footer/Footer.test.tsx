/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@services/utils/test-utils';

import Footer from '@components/Footer';

it('Footer on the page', async () => {
  render(<Footer />);

  const element = await screen.findByTestId('footer');
  expect(element).toBeInTheDocument();
});