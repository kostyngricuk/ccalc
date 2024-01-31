import styled from "styled-components";

export const StyledFormWrapper = styled.div`
    max-width: 380px;
    margin: 0 auto;
`;

export const StyledFormField = styled.div`
    display: flex;
    justify-content: center;
    & > * + * {
        margin-left: 20px;
    }
    & > .row {
        display: flex;
        justify-content: center;
        & > * + * {
            margin-left: 20px;
        }
    }
    @media ${props => props.theme.device.mobile} {
        display: initial;
        & > * {
            margin-left: 0;
            width: 100%;
        }
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