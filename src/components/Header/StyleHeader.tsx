import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${props => props.theme.color.white};
    box-shadow: 0px 1px 2px 0px ${props => props.theme.color.gray};
    & > * {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
    }
`
export const StyledHeaderContent = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 -0.5em;
    width: 100%;
    & > * {
        margin: 0 0.5em;
    }
    @media ${props => props.theme.device.mobile} {
        flex-direction: row-reverse;
        justify-content: flex-start;
    }
`