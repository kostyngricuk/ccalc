/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';

import Footer from '@components/Footer';

it('Footer on the page', () => {
  const wrapper = shallow(<Footer />);

  const element = wrapper.find('[data-testid="footer"]');
  expect(element).not.toBe(null);
});