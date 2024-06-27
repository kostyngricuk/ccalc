/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { shallow } from "enzyme";

import Copyright from '@components/Copyright';
import { I18nextProvider } from "react-i18next";
import i18n from "@services/i18n";


it('Copyright with currect year', () => {
  const wrapper = shallow(<I18nextProvider i18n={i18n}><Copyright /></I18nextProvider>);

  const currentYear:string = new Date().getFullYear().toString();
  const element = wrapper.contains(currentYear);
  expect(element).not.toBe(null);
})