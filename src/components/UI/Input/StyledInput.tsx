import styled from "styled-components";

export const StyledInput = styled.div`
    display: inline-block;
    margin-bottom: 30px;
    position: relative;
`
export type TPosition = 'left' | 'center' | 'right';
export const StyledInputLabel = styled.label<{$position: TPosition}>`
    display: flex;
    flex-direction: column-reverse;
    align-items: ${props => props.$position};
    text-align: ${props => props.$position};
    cursor: pointer;
    &.is-radio {
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .label {
        display: block;
        font-size: 14px;
        color: var(--color-gray);
        position: absolute;
        z-index: 2;
        left: 0;
        bottom: 50%;
        transform: translateY(50%);
        transition: .23s;
        z-index: 1;
        width: 100%;
        padding-top: 0.5em;
    }
    input {
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--color-gray);
        font-size: 16px;
        outline: none;
        background-color: transparent;
        position: relative;
        z-index: 2;
        padding-top: 0.5em;
        transition: .23s;
        &[type="radio"] {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            & ~ .radio-button {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 20px;
                height: 20px;
                min-width: 20px;
                border-radius: 50%;
                border: 1px solid var(--color-gray);
                padding: 2px;
                pointer-events: none;
                margin-left: .5em;
                &:before {
                    content: '';
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    display: inline-block;
                    background-color: transparent;
                }
            }
            & ~ .label {
                position: initial;
                transform: none;
                margin-top: 0;
                font-size: 14px!important;
                padding: 0!important;
                width: auto;
            }
        }
        &:not([type="radio"]) {
            height: 40px;
        }
        &:hover,
        &:hover + .radio-button {
            border-color: var(--color-black);
        }
        &:focus {
            border-color: var(--color-primary);
        }
        &:checked + .radio-button {
            border-color: var(--color-primary);
            &:before {
                background-color: var(--color-primary);
            }
        }
        &[type="radio"],
        &:focus,
        &:not([value=""]) {
            & ~ .label {
                bottom: 100%;
                font-size: 12px;
                color: var(--color-black);
                padding-top: .25em;
            }
        }
        &[value=""]:not(:focus) {
            margin-top: -20px;
            & ~ .label {
                bottom: calc(50% + 10px);
            }
        }
    }
    &.has-error {
        span {
            color: var(--color-error);
        }
        input {
            border-color: var(--color-error);
        }
        & + .errorText {
            display: inline-block;
            font-size: 12px;
            position: absolute;
            top: calc(100% + .25em);
        }
    }
`

export const StyledInputError = styled.span`
    color: ${props => props.theme.color.red};
`