import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import { StyledInput, StyledInputError, StyledInputLabel } from "./StyledInput";
import { useTranslation } from "react-i18next";
import { ChangeEventHandler } from "react";

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
}: IInputControlled) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value.toString(),
    rules: { required },
  });

  return (
    <Input name={field.name} value={field.value} label={label} type={type} error={fieldState?.error} onChange={field.onChange} />
  );
};

export const Input = (props: IInput) => {
    const {
        label,
        error
    } = props;
  const { t } = useTranslation();

  return (
    <StyledInput>
      <StyledInputLabel>
        <span>{label}</span>
        <input
          {...props}
        />
      </StyledInputLabel>
      {error && (
        <StyledInputError>{t("form.field.error.required")}</StyledInputError>
      )}
    </StyledInput>
  );
};
