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

import { StyledInput, StyledInputLabel } from './StyledInput';
import { errorCodes } from '../../../services/constants/errors';
import { TChange, TOptions } from '../Select/types';
import Select from '../Select/Select';

export enum EnumInputType {
  text = 'text',
  email = 'email',
  password = 'password',
  number = 'number',
  tel = 'tel',
  radio = 'radio',
  select = 'select'
}

interface IInputBase {
  name: FieldPath<FieldValues>;
  type?: EnumInputType | undefined;
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

  if (type === EnumInputType.select) {
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
          type === EnumInputType.radio && 'is-radio',
          Boolean(units?.length) && 'has-units',
          required && 'is-required'
        )}
      >
        {type === EnumInputType.radio ? (
          <>
            <input
              name={name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              autoComplete="off"
              type={type?.toString()}
              checked={checked}
            />
            <span className="radio-button" />
          </>
        ) : (
          <input
            name={name}
            value={value}
            required={required}
            onChange={(e) => onChange(e.target.value)}
            autoComplete="off"
            type={type?.toString()}
          />
        )}
        <span className="label">
          {label}
        </span>
        {Boolean(units?.length) && <span className="units">{units}</span>}
      </StyledInputLabel>
    </StyledInput>
  );
}
Input.defaultProps = {
  type: EnumInputType.text,
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
      pattern: type === EnumInputType.number ? /\d/ : /./,
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
      onChange={(input: any) => {
        if (onChangeTrigger) {
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
  type: EnumInputType.text,
  units: '',
  required: false,
  value: '',
  isFullwidth: false,
  options: [],
  control: null,
  onChangeTrigger: () => null,
};
