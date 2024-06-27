/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Root from '@pages/index';
import { render, RenderResult } from '@services/utils/test-utils';

describe('Loading', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
     wrapper = render(<Root />);
  })

  it('Show loading spiner', () => {
    const element = wrapper.getByTestId('loader');
    expect(element).toBeInTheDocument();
  });

  it('Show main content', async () => {
    const element = await wrapper.findByTestId('main', {}, {
      timeout: 3000,
    });
    expect(element).toBeInTheDocument();
  });
})
