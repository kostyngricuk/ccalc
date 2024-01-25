import styled from "styled-components";

export const StyledSection = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
    @media ${props => props.theme.device.mobile} {
        padding-top: 55px;
        padding-bottom: 55px;
    }
`