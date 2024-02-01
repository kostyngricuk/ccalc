import { FormEventHandler, ReactNode } from "react"
import { StyledFormWrapper, StyledFormResult, StyledForm } from "./StyledForm"

export const Form = ({
    children,
    onSubmit,
    resMessage
}: {
    children: ReactNode,
    onSubmit: FormEventHandler,
    resMessage: string
}) => {
    return (
        <StyledFormWrapper>
            <StyledForm onSubmit={onSubmit}>
                { children }
            </StyledForm>
            <StyledFormResult>{ resMessage }</StyledFormResult>
        </StyledFormWrapper>
    )
}