import styled, { css } from 'styled-components';

export const StyledInput = styled.div<{$isFullwidth: boolean | undefined}>`
  display: inline-block;
  margin-bottom: 20px;
  position: relative;
  ${(props) => props.$isFullwidth && css`
    width: 100%;
  `}
`;

export const StyledInputLabel = styled.label`
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;
  &.is-radio {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  &.has-units input {
    padding-right: 1.5em;
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
  &.is-required .label::after {
    content: '*';
    color: var(--color-red);
  }
  .units {
    color: var(--color-gray);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
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
`;

export const StyledInputError = styled.span`
  color: var(--color-red);
`;
