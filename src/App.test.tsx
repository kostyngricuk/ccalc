/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@services/utils/test-utils';

import App from './App';

describe('Loading pages', () => {
  it('Show loading spiner', () => {
    render(<App />);

    const element = screen.getByTestId('spiner');
    expect(element).toBeInTheDocument();
  });
})
