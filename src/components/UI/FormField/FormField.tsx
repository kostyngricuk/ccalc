import { Control, FieldPath, useController } from "react-hook-form";
import { StyledField, StyledFieldError, StyledFieldLabel } from "./StyledFormField";
import { TSettingsFormValues } from "../../../pages/SettingsScreen";
import { useTranslation } from "react-i18next";

export const FormField = ({
    name,
    type = 'text',
    label,
    required = false,
    control,
}: {
    name: FieldPath<TSettingsFormValues>,
    type?: string,
    label?: string,
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
        <StyledField>
            <StyledFieldLabel>
                <span>{label}</span>
                <input {...field} type={type}/>
            </StyledFieldLabel>
            {fieldState?.error && <StyledFieldError>{ t('form.field.error.required') }</StyledFieldError>}
        </StyledField>
    )
}