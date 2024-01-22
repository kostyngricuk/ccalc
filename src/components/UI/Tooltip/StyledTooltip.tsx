import styled from "styled-components";

export const StyledTooltip = styled.div`
    display: inline-block;
    position: relative;
    & .TooltipContent {
        right: calc(100% - 15px);
        position: absolute;
        top: calc(100% - 15px);
        padding: 10px 20px;
        width: max-content;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
        background-color: #fff;
        font-size: 14px;
        opacity: 0;
        visibility: hidden;
        transition: .23s;
    }
    &:hover .TooltipContent {
        opacity: 1;
        visibility: visible;
    }
`;