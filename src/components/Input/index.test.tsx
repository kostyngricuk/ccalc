import React from 'react';
import { fireEvent, render, waitFor } from 'utils/test-utils';
import { Input, InputControlled } from 'components/Input';
import { ISelectOption } from 'components/Select/types';
import { UNITS } from 'constants/global';
import { FieldValues, useForm } from 'react-hook-form';

describe('Test Input Components', () => {
  it('Render with default props', () => {
    const mockOnChange = jest.fn();
    const wrapper = render(
      <Input
        name='someName'
        label='someLabel'
        onChange={mockOnChange}
      />
    );
    const element = wrapper.getByTestId('input');
    expect(element).toBeInTheDocument();
  });

  it('Render with custom props', () => {
    const mockOnChange = jest.fn();
    const wrapper = render(
      <Input
        name='someName'
        type='number'
        value='initValues'
        label='someLabel'
        error='some error text'
        units={UNITS.kg}
        onChange={mockOnChange}
        isFullwidth
        required
      />
    );
    const element = wrapper.getByText('someLabel');
    expect(element).toBeInTheDocument();
  });

  it('Change input value', () => {
    const mockOnChange = jest.fn();
    const wrapper = render(
      <Input
        name='someName'
        label='someLabel'
        onChange={mockOnChange}
      />
    );

    const input = wrapper.getByTestId('input');

    fireEvent.focus(input);
    fireEvent.change(input, {
      target: {
        value: "someValue"
      }
    })

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('Unsing SELECT type', () => {
    const mockOptions = [
      {label: 'Option 1', value: 'option-1'},
      {label: 'Option 2', value: 'option-2'},
    ] as ISelectOption[];

    const mockOnChange = jest.fn();

    const wrapper = render(
      <Input
        name='someName'
        label='someLabel'
        type='select'
        options={mockOptions}
        onChange={mockOnChange}
      />
    );

    const selectInput = wrapper.getByRole('combobox');
    expect(selectInput).toBeInTheDocument();
  });

  it('Using RADIO type', () => {
    const mockOnChange = jest.fn();
    const wrapper = render(
      <Input
        name='someName'
        type='radio'
        label='someLabel'
        units={UNITS.kg}
        checked
        onChange={mockOnChange}
        required
      />
    );
    const element = wrapper.getByText('someLabel');
    expect(element).toBeInTheDocument();
  });
})

describe('Test Controlled Input Component', () => {
  it('Render with default props', () => {
    function Component() {
      const { control } = useForm<FieldValues>();
      return (
        <InputControlled
          name='someName'
          label='someLabel'
          control={control}
        />
      );
    };

    const wrapper = render(<Component />);
    const element = wrapper.getByTestId('input');
    expect(element).toBeInTheDocument();
  });

  it('Using NUMBER type', () => {
    function Component() {
      const { control } = useForm<FieldValues>();
      return (
        <InputControlled
          name='someName'
          label='someLabel'
          control={control}
          type='number'
        />
      );
    };

    const wrapper = render(<Component />);
    const element = wrapper.getByTestId('input');
    expect(element.getAttribute('type')).toBe('number');
  });

  it('Unsing SELECT type', async() => {
    const mockOptions = [
      {label: 'Option 1', value: 'option-1'},
      {label: 'Option 2', value: 'option-2'},
    ] as ISelectOption[];

    const mockOnChange = jest.fn();

    function Component() {
      const { control } = useForm<FieldValues>();
      return (
        <InputControlled
          name='someName'
          value='initValues'
          label='someLabel'
          units={UNITS.kg}
          isFullwidth
          required
          type='select'
          options={mockOptions}
          control={control}
          onChangeTrigger={mockOnChange}
        />
      );
    };

    const wrapper = render(<Component />);
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