import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { errorCodes } from '@services/constants/errors';
import { ISelectOption, TChange, TOptions } from '@components/UI/Select/types'
import Select from '@components/UI/Select'
import { StyledInput, StyledInputLabel } from './StyledInput';

export type TypeInput = 'text' | 'email' | 'password' | 'number' | 'tel' | 'radio' | 'select';

interface IInputBase {
  name: FieldPath<FieldValues>;
  type?: TypeInput | undefined;
  value?: string | undefined;
  label: string | undefined;
  units?: string;
  isFullwidth?: boolean | undefined;
  options?: any;
  required?: boolean;
}

interface IInput extends IInputBase {
  error?: FieldError | string | undefined;
  checked?: boolean | undefined;
  onChange: (value: string) => ChangeEventHandler<HTMLInputElement> | void;
}

interface IInputControlled extends IInputBase {
  control?: Control<FieldValues>;
  onChangeTrigger?: (value: string) => void;
}

export function Input(props: IInput) {
  const {
    name,
    type,
    value,
    label,
    error,
    units,
    checked,
    onChange,
    isFullwidth,
    options,
    required
  } = props;

  if (type === 'select') {
    return (
      <StyledInput $isFullwidth={isFullwidth} className="Input">
        <Select
          name={name}
          value={value}
          options={options as TOptions}
          onChange={onChange as TChange}
        />
      </StyledInput>
    )
  }
  return (
    <StyledInput $isFullwidth={isFullwidth} className="Input">
      <StyledInputLabel
        className={classNames(
          error && 'has-error',
          type === 'radio' && 'is-radio',
          Boolean(units?.length) && 'has-units',
          required && 'is-required'
        )}
      >
        <input
          name={name}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          type={type?.toString()}
          checked={checked}
        />
        {type === 'radio' && <span className="radio-button" />}
        <span className="label">
          {label}
        </span>
        {Boolean(units?.length) && <span className="units">{units}</span>}
      </StyledInputLabel>
    </StyledInput>
  );
}
Input.defaultProps = {
  type: 'text',
  units: '',
  checked: false,
  value: '',
  isFullwidth: false,
  options: [],
  error: '',
  required: false,
};

export function InputControlled({
  name,
  type,
  value,
  required,
  label,
  units,
  control,
  isFullwidth,
  options,
  onChangeTrigger
}: IInputControlled) {
  const { t } = useTranslation();
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value,
    rules: {
      required: required === true ? `"${label}" ${t(`errors.${errorCodes.IS_REQUIRED}`)}` : false,
      pattern: type === 'number' ? /\d/ : /./,
    },
  });

  return (
    <Input
      units={units}
      name={field.name}
      value={field.value}
      label={label}
      required={required}
      type={type}
      error={fieldState?.error}
      onChange={(input: string | ISelectOption) => {
        if (onChangeTrigger && typeof input !== 'string') {
          onChangeTrigger(input.value);
        }
        field.onChange(input);
      }}
      isFullwidth={isFullwidth}
      options={options}
    />
  );
}
InputControlled.defaultProps = {
  type: 'text',
  units: '',
  required: false,
  value: '',
  isFullwidth: false,
  options: [],
  control: null,
  onChangeTrigger: () => null,
};
