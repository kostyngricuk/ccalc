import styled from "styled-components";

export const StyledSection = styled.section`
    padding: 80px 0;
    @media ${props => props.theme.device.mobile} {
        padding: 55px 0;
    }
`