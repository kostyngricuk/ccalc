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

export enum EnumInputType {
  text = 'text',
  email = 'email',
  password = 'password',
  number = 'number',
  tel = 'tel',
  radio = 'radio',
}

interface IInputBase {
  name: FieldPath<FieldValues>;
  type?: EnumInputType | undefined;
  value?: string | undefined;
  label: string | undefined;
  units?: string;
  isFullwidth?: boolean | undefined;
}
interface IInput extends IInputBase {
  error: FieldError | string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  checked?: boolean | undefined;
}
interface IInputControlled extends IInputBase {
  required?: boolean | undefined;
  control: Control<FieldValues>;
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
    isFullwidth
  } = props;

  return (
    <StyledInput $isFullwidth={isFullwidth} className="Input">
      <StyledInputLabel
        className={classNames(
          error && 'has-error',
          type === EnumInputType.radio && 'is-radio',
          Boolean(units?.length) && 'has-units',
        )}
      >
        <input
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
          type={type?.toString()}
          checked={checked}
        />
        {type === EnumInputType.radio && <span className="radio-button" />}
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
  isFullwidth: false
};

export function InputControlled({
  name,
  type,
  value,
  required,
  label,
  units,
  control,
  isFullwidth
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
      type={type}
      error={fieldState?.error}
      onChange={field.onChange}
      isFullwidth={isFullwidth}
    />
  );
}
InputControlled.defaultProps = {
  type: EnumInputType.text,
  units: '',
  required: false,
  value: '',
  isFullwidth: false
};
