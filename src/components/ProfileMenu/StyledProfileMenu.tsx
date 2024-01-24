import styled from "styled-components";
import { Dropdown } from "../UI/Dropdown/Dropdown";

export const StyledProfileMenu = styled(Dropdown)`
    @media ${props => props.theme.device.tablet} {
        display: none;
    }
`

export const StyledProfileMenuWrap = styled.ul`
    text-align: center;
    list-style: none;
    padding: 0;
    li {
        margin: 0.5em 0!important;
    }
`