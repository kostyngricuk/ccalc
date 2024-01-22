import styled from "styled-components";

export enum Color {
    black = 'black',
    primary = 'primary',
    secondary = 'secondary',
    gray = 'gray',
    red = 'red'
}

type CalorieWidget = {
    $color: keyof typeof Color
}

export const StyleCalorieWidget = styled.div<CalorieWidget>`
    width: 120px;
    height: 40px;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.theme.color[props.$color]};
    color: ${props => props.theme.color[props.$color]};
    font-size: 18px;
    font-weight: 700;
    line-height: 1em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: help;
    & > span {
        display: inline-block;
        margin-left: 0.25em;
    }
`