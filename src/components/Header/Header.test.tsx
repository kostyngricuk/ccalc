/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@services/utils/test-utils';

import Header from '@components/Header';

describe('Header tests', () => {
  it('Header on the page', () => {
    render(<Header />);

    const element = screen.getByTestId('header');
    expect(element).toBeInTheDocument();
  });

  it('Hide menu for unauthorized users', () => {
    render(<Header />);

    const element = screen.getByTestId('header-nav');
    expect(element).not.toBeInTheDocument();
  });
})