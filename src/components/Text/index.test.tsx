import React from 'react';
import { render } from 'utils/test-utils';
import { EnumHorizontalPosition } from 'types/global';
import Text from 'components/Text';

it('Render Text Component with default props', () => {
  const wrapper = render(<Text>Some Text</Text>);
  expect(wrapper.getByText('Some Text')).toBeInTheDocument();
})

it('Render Text Component at the center with custom class', () => {
  const wrapper = render(
    <Text position={EnumHorizontalPosition.center} className='someClass'>
      Some Text
    </Text>
  );
  expect(wrapper.getByText('Some Text').className).toContain('someClass');
})