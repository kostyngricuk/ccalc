/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@services/utils/test-utils';

import Copyright from '@components/Copyright';


it('Copyright with currect year', async () => {
  render(<Copyright />);

  const currentYear:string = new Date().getFullYear().toString();
  const element = await screen.findByText((content) => content.includes(currentYear));
  expect(element).toBeInTheDocument();
})