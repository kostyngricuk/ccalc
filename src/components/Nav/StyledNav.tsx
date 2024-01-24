import styled from "styled-components";
import { Button } from "../UI/Button/Button";

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    @media ${props => props.theme.device.tablet} {
        width: auto;
        margin-left: 0!important;
    }
`;

export const StyledNavWrap = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    &.is-desktop {
        @media ${props => props.theme.device.tablet} {
            display: none;
        }
    }
    &.is-mobile {
        position: fixed;
        z-index: 2;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.color.white};
        top: 0;
        left: 0;
        display: none;
        overflow: auto;
        padding: 60px 30px;
        @media ${props => props.theme.device.tablet} {
            display: flex;
        }
    }
`;

export const StyledNavBurger = styled(Button)`
    position: relative;
    z-index: 3;
    display: none;
    @media ${props => props.theme.device.tablet} {
        display: inline-flex;
    }
`;