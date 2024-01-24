import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.color.white};
    box-shadow: 0px -1px 2px 0px ${props => props.theme.color.gray};
    & > * {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
`