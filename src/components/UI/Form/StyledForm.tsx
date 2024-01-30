import styled from "styled-components";

export const StyledFormWrapper = styled.div`
    max-width: 380px;
    margin: 0 auto;
`;

export const StyledFormField = styled.div`
    display: flex;
    justify-content: space-between;
    & > * + * {
        margin-left: 1em;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledFormResult = styled.p`
    margin-top: 1rem;
    color: ${props => props.theme.color.primary};
`;

export const StyledFormActions = styled.p`
    display: flex;
    justify-content: space-between;
    margin: 0 -1em -1em;
    & > * {
        margin: 1em;
        width: 100%;
    }
`;