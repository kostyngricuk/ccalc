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
    const spiner = await screen.findByTestId('loader', {}, {
      timeout: 5000
    });
    expect(spiner).not.toBeInTheDocument();
  });
})
