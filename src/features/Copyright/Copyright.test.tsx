/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { render } from 'utils/test-utils';
import Copyright from '.';


it('Copyright with currect year', () => {
  const wrapper = render(<Copyright />);

  const currentYear:string = new Date().getFullYear().toString();
  const element = wrapper.getByText(new RegExp(currentYear, 'i'));
  expect(element).toBeInTheDocument();
})