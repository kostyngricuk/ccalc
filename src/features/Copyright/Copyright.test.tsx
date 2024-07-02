/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import Copyright from '.';
import { render } from "@services/utils/test-utils";


it('Copyright with currect year', () => {
  const wrapper = render(<Copyright />);

  const currentYear:string = new Date().getFullYear().toString();
  const element = wrapper.getByText(new RegExp(currentYear, 'i'));
  expect(element).toBeInTheDocument();
})