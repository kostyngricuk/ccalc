import styled, { keyframes } from "styled-components";

const wave = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`

const animloader = keyframes`
    0% { box-shadow: 2px 0px rgba(255, 255, 255, 0), 12px 0px lightgray, 20px 0px rgba(255, 255, 255, 0); }
    50% { box-shadow: 2px -5px lightgray, 12px -3px lightgray, 20px -2px lightgray; }
    100% { box-shadow: 2px -8px rgba(255, 255, 255, 0), 12px -5px rgba(255, 255, 255, 0), 20px -5px rgba(255, 255, 255, 0); }
`

export const StyledLoader = styled.div`
    position: relative;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 40px;
    .cup {
        width: 48px;
        height: 40px;
        position: absolute;
        display: inline-block;
        background-color: transparent;
        border: 2px solid gray;
        border-radius: 15% 15% 35% 35%;
        z-index: 2;
        &::after {
            content: '';
            position: absolute;
            display: inline-block;
            width: 16px;
            height: 20px;
            left: 45px;
            top: 8px;
            border: 2px solid gray;
            border-left: none;
            border-radius: 0 4px 4px 0;
        }
        &::before {
            content: '';
            position: absolute;
            display: inline-block;
            width: 1px;
            height: 10px;
            color: gray;
            top: -15px;
            left: 11px;
            animation: ${animloader} 1s ease infinite;
        }
    }
    .wave {
        display: block;
        width: 48px;
        height: 40px;
        background-color: ${props => props.theme.color.primary};
        overflow: hidden;
        border-radius: 15% 15% 35% 35%;
        z-index: -1;
        position: absolute;
        &:before,
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 45%;
            top: -70%;
            background-color: #fff;
            animation: ${wave} 5s linear infinite;
        }
        &:before {
            border-radius: 30%;
            background: rgba(255, 255, 255, 0.4);
            animation: ${wave} 3s linear infinite;
        }
    }
`