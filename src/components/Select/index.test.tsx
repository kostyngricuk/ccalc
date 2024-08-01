import React from 'react';
import { fireEvent, render, waitFor } from 'utils/test-utils';
import Select from 'components/Select';
import { ISelectOption } from './types';

describe('Test Select component', () => {
  it('Render component without options', () => {
    const mockOnChange = jest.fn();
    const wrapper = render(
      <Select
        name='selectName'
        value={'0' as unknown}
        onChange={mockOnChange}
      />
    );
    const selectInput = wrapper.getByRole('combobox');
    expect(selectInput).toBeInTheDocument();
  });

  it('Change options', async () => {
    const mockOptions = [
      {label: 'Option 1', value: 'option-1'},
      {label: 'Option 2', value: 'option-2'},
    ] as ISelectOption[];

    const mockOnChange = jest.fn();

    const wrapper = render(
      <Select
        name='selectName'
        options={mockOptions}
        onChange={mockOnChange}
      />
    );

    const selectInput = wrapper.getByRole('combobox');
    expect(selectInput).toBeInTheDocument();

    fireEvent.focus(selectInput);
    fireEvent.keyDown(selectInput, { key: 'ArrowDown', code: 40 });
    await waitFor(() => {
      const targetOption = wrapper.getByText(mockOptions[1].label);
      fireEvent.click(targetOption);
    });

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      const targetOption = wrapper.getByDisplayValue(mockOptions[1].value);
      expect(targetOption).toBeInTheDocument();
    });
  });
})