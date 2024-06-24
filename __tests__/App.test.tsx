import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../src/App';


describe('App loading', () => {
  beforeEach(() => {
    render(<App />);
  })

  it('Show spiner', () => {
    const spiner = screen.getByTestId('loader');
    expect(spiner).toBeInTheDocument();
  });

  it('Hide spiner', async () => {
    setTimeout(() => {
      const spiner = screen.getByTestId('loader');
      expect(spiner).not.toBeInTheDocument();
    }, 5000)
  });
})
