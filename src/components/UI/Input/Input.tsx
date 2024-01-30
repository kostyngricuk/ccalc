import { Control, FieldElement, FieldPath, FieldValues, useController } from "react-hook-form";
import { StyledInput, StyledInputError, StyledInputLabel } from "./StyledInput";
import { useTranslation } from "react-i18next";

type TInputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'radio';
type TInputName = FieldPath<FieldValues>;

export const Input = ({
    name,
    type = 'text',
    label,
    value = '',
    required = false,
    checked = false,
    control,
}: {
    name: TInputName,
    type?: TInputType,
    label?: string,
    value?: string | number,
    required?: boolean,
    checked?: boolean,
    control: Control<FieldValues>,
}) => {
    const { t } = useTranslation();
    const hanldeChange = (field: FieldElement) => {

    }

    const {
        field,
        fieldState
    } = useController({
        name,
        control,
        defaultValue: value.toString(),
        rules: { required }
    });

    return (
        <StyledInput>
            <StyledInputLabel>
                <span>{label}</span>
                <input {...field} checked={checked} type={type} onChange={(e) => {
                    field.onChange(e);
                    hanldeChange(field);
                }}/>
            </StyledInputLabel>
            {fieldState?.error && <StyledInputError>{ t('form.field.error.required') }</StyledInputError>}
        </StyledInput>
    )
}