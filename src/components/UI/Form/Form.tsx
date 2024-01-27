import { FormEventHandler, ReactNode } from "react"
import { StyledFormWrapper, StyledFormResult, StyledForm } from "./StyledForm"

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