import React from 'react';
import { render } from 'utils/test-utils';
import { EnumHorizontalPosition } from 'types/global';
import Title from 'components/Title';

it('Render Title Component with default props', () => {
  const wrapper = render(<Title>Some Text</Title>);
  expect(wrapper.getByRole('heading')).toBeInTheDocument();
})

it('Render Title Component at the center', () => {
  const wrapper = render(
    <Title position={EnumHorizontalPosition.center}>
      Some Text
    </Title>
  );
  expect(wrapper.getByRole('heading')).toBeInTheDocument();
})

describe('Render Title Component with diferent sizes', () => {
  it('Size - h2', () => {
    const wrapper = render(<Title variant='h2'>Some Text</Title>);
    expect(wrapper.getByRole('heading').tagName).toBe('H2');
  })

  it('Size - h3', () => {
    const wrapper = render(<Title variant='h3'>Some Text</Title>);
    expect(wrapper.getByRole('heading').tagName).toBe('H3');
  })

  it('Size - h4', () => {
    const wrapper = render(<Title variant='h4'>Some Text</Title>);
    expect(wrapper.getByRole('heading').tagName).toBe('H4');
  })

  it('Size - h5', () => {
    const wrapper = render(<Title variant='h5'>Some Text</Title>);
    expect(wrapper.getByRole('heading').tagName).toBe('H5');
  })

  it('Size - h6', () => {
    const wrapper = render(<Title variant='h6'>Some Text</Title>);
    expect(wrapper.getByRole('heading').tagName).toBe('H6');
  })
})