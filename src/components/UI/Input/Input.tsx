import { Control, FieldPath, useController } from "react-hook-form";
import { StyledInput, StyledInputError, StyledInputLabel } from "./StyledInput";
import { TSettingsFormValues } from "../../../pages/SettingsScreen";
import { useTranslation } from "react-i18next";

export const Input = ({
    name,
    type = 'text',
    label,
    value = '',
    required = false,
    control,
}: {
    name: FieldPath<TSettingsFormValues>,
    type?: 'text' | 'email' | 'password' | 'number' | 'tel',
    label?: string,
    value?: string | number,
    required?: boolean,
    control: Control<TSettingsFormValues>,
}) => {
    const { t } = useTranslation();

    const {
        field,
        fieldState
    } = useController({
        name,
        control,
        rules: { required }
    });

    return (
        <StyledInput>
            <StyledInputLabel>
                <span>{label}</span>
                <input {...field} type={type} value={value}/>
            </StyledInputLabel>
            {fieldState?.error && <StyledInputError>{ t('form.field.error.required') }</StyledInputError>}
        </StyledInput>
    )
}