import styled from "styled-components";

export const StyledInput = styled.div`
    display: inline-block;
    margin-bottom: 1rem;
`

export const StyledInputLabel = styled.label`
    display: block;
    span {
        display: block;
    }
    input {
        width: 100%;
    }
`

export const StyledInputError = styled.span`
    color: ${props => props.theme.color.red};
`