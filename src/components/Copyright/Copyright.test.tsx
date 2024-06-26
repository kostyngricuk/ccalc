/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { shallow } from "enzyme";

import Copyright from '@components/Copyright';


it('Copyright with currect year', () => {
  const wrapper = shallow(<Copyright />);

  const currentYear:string = new Date().getFullYear().toString();
  const element = wrapper.contains(currentYear);
  expect(element).not.toBe(null);
})