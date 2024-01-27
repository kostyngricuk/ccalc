import styled from "styled-components";

export const StyledField = styled.div`
    display: inline-block;
    margin-bottom: 1rem;
`

export const StyledFieldLabel = styled.label`
    display: block;
    span {
        display: block;
    }
    input {
        width: 100%;
    }
`

export const StyledFieldError = styled.span`
    color: ${props => props.theme.color.red};
`