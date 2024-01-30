import { FormEventHandler, ReactNode } from "react"
import { StyledFormWrapper, StyledFormResult, StyledForm, StyledFormField, StyledFormActions } from "./StyledForm"

export const Form = ({
    children,
    onSubmit
}: {
    children: ReactNode,
    onSubmit: FormEventHandler
}) => {
    return (
        <StyledForm onSubmit={onSubmit}>
            { children }
        </StyledForm>
    )
}

export const FormWrapper = ({
    children,
}: {
    children: ReactNode,
}) => {
    return (
        <StyledFormWrapper>
            { children }
        </StyledFormWrapper>
    )
}

export const FormField = ({
    children,
}: {
    children: ReactNode,
}) => {
    return (
        <StyledFormField>
            { children }
        </StyledFormField>
    )
}

export const FormResult = ({
    children,
}: {
    children: ReactNode,
}) => {
    return (
        <StyledFormResult>
            { children }
        </StyledFormResult>
    )
}

export const FormActions = ({
    children,
}: {
    children: ReactNode,
}) => {
    return (
        <StyledFormActions>
            { children }
        </StyledFormActions>
    )
}