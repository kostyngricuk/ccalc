import styled, { css } from "styled-components";

const mixinButtonColor = ($isOutline: boolean, color: string) => css`
    border-color: ${color};
    background-color: ${color};
    color: #fff;
    ${$isOutline && css`
        background-color: transparent;
        color: ${color};
        &:hover,
        &:focus {
            background-color: ${color};
            border-color: ${color};
            color: #fff;
        }
    `}
    ${!$isOutline && css`
        &:hover,
        &:focus {
            background-color: transparent;
            border-color: ${color};
            color: ${color};
        }
    `}
`;

export const StyledButton = styled.button<{
        color:string,
        $isIcon: boolean,
        $isOutline: boolean,
        $isDisabled: boolean
    }>`
    // @include resetButton;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 0;
    background-color: transparent;
    cursor: pointer;
    ${props => props.$isIcon && css`
        width: 40px;
        .Icon {
            margin: 0;
        }
    `}
    ${props => props.$isIcon && props.$isOutline && css`
        border: none!important;
    `}
    ${props => props.$isOutline && css`
        border-width: 2px;
        border-style: solid;
    `}
    ${props => props.$isDisabled && css`
        pointer-events: none;
        opacity: 0.65;
    `}
    ${props => mixinButtonColor(props.$isOutline, props.theme.color[props.color])}
`