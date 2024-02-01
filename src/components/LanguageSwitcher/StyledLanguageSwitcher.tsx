import styled from "styled-components";
import { resetButton } from "../../services/styled/mixins";

export const StyledLanguageSwitcher = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        ${resetButton}
        font-weight: 700;
        font-size: 14px;
        line-height: 1em;
        margin: 0 5px;
        cursor: pointer;
        &:hover,
        &:focus {
            color: var(--color-primary);
        }
        &.is-active {
            color: var(--color-primary);
            pointer-events: none;
        }
        @media ${props => props.theme.device.mobile} {
            margin: 0;
            line-height: 1.5em;
        }
    }
    @media ${props => props.theme.device.mobile} {
        flex-direction: column;
    }
`