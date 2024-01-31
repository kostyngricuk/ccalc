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

type TInputType = "text" | "email" | "password" | "number" | "tel" | "radio";

interface IInput {
    name: FieldPath<FieldValues>;
    type?: TInputType;
    value?: string | number;
    required?: boolean;
    label?: string;
    error?: FieldError | string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    checked?: boolean;
    $position?: TPosition;
}
interface IInputControlled extends IInput {
    control?: Control<FieldValues>;
}

export const InputControlled = ({
  name,
  type = "text",
  value = "",
  required = false,
  label = "",
  control,
  $position = "left"
}: IInputControlled) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value.toString(),
    rules: { required },
  });

  return (
    <Input $position={$position} name={field.name} value={field.value} label={label} type={type} error={fieldState?.error} onChange={field.onChange} />
  );
};

export const Input = (props: IInput) => {
    const {
        label,
        error,
        $position = "left",
        type
    } = props;

  return (
    <StyledInput>
      <StyledInputLabel $position={$position} className={classNames(
        error && 'has-error',
        type === 'radio' && 'is-radio'
      )}>
        <input
          {...props}
        />
        {
          type === 'radio' && <span className="radio-button"></span>
        }
        <span className="label">{label}</span>
      </StyledInputLabel>
    </StyledInput>
  );
};
