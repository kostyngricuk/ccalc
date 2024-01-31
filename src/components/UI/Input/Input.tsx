import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import { StyledInput, StyledInputLabel, TPosition } from "./StyledInput";
import { ChangeEventHandler } from "react";
import classNames from "classnames";

export enum EnumInputType {
  text = "text",
  email = "email",
  password = "password",
  number = "number",
  tel = "tel",
  radio = "radio"
};

interface IInput {
    name: FieldPath<FieldValues>;
    type?: EnumInputType;
    value?: string | number;
    required?: boolean;
    label?: string;
    units?: string;
    error?: FieldError | string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    checked?: boolean;
    $position?: TPosition;
}
interface IInputControlled extends IInput {
    control?: Control<FieldValues>;
}

const getInputPatternByType = (type: EnumInputType) => {
  switch (type) {
    case EnumInputType.number:
      return /\d/;
    default:
      return /./;
  }
}

export const InputControlled = ({
  name,
  type = EnumInputType.text,
  value = "",
  required = false,
  label = "",
  units,
  control,
  $position = "left"
}: IInputControlled) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value.toString(),
    rules: {
      required,
      pattern: getInputPatternByType(type)
    },
  });

  return (
    <Input units={units} $position={$position} name={field.name} value={field.value} label={label} type={type} error={fieldState?.error} onChange={field.onChange} />
  );
};

export const Input = (props: IInput) => {
  const {
      label,
      error,
      $position = "left",
      type,
      units
  } = props;

  return (
    <StyledInput>
      <StyledInputLabel $position={$position} className={classNames(
        error && 'has-error',
        type === EnumInputType.radio && 'is-radio',
        Boolean(units?.length) && 'has-units'
      )}>
        <input
          {...props}
          autoComplete="off"
          type={type?.toString()}
        />
        {
          type === EnumInputType.radio && <span className="radio-button"></span>
        }
        <span className="label">{label}</span>
        {
          Boolean(units?.length) && <span className="units">{units}</span>
        }
      </StyledInputLabel>
    </StyledInput>
  );
};
