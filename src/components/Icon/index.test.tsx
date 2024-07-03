import React from 'react';
import { render } from 'utils/test-utils';
import Icon from 'components/Icon';
import { CloseSVG } from 'icons/index';

it('Render Icon Component with default props', () => {
  const wrapper = render(<Icon sprite={CloseSVG} />);
  expect(wrapper.getByRole('img')).toBeInTheDocument();
})

it('Render Icon Component with custom props', () => {
  const wrapper = render(
    <Icon
      width='40px'
      height='40px'
      sprite={CloseSVG} />
  );
  expect(wrapper.getByRole('img')).toBeInTheDocument();
})