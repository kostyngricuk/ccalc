import React from 'react';
import { render } from 'utils/test-utils';
import FormField, { EnumFormFieldType } from 'components/FormField';

describe('Render FormField Component', () => {
  it('Render with default props', () => {
    const wrapper = render(<FormField>Some Text</FormField>);
    expect(wrapper.getByText('Some Text')).toBeInTheDocument();
  })

  it('Render as ROW', () => {
    const wrapper = render(<FormField type={EnumFormFieldType.row}>Some Text</FormField>);
    expect(wrapper.getByText('Some Text')).toBeInTheDocument();
  })

  it('Render as ACTIONS', () => {
    const wrapper = render(<FormField type={EnumFormFieldType.actions}>Some Text</FormField>);
    expect(wrapper.getByText('Some Text')).toBeInTheDocument();
  })
})