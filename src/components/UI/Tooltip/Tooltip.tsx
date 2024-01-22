import { ReactNode } from 'react';
import './Tooltip.scss';
import { StyledTooltip } from './StyledTooltip';

export const Tooltip = ({
    children,
    text
}: {
    children: ReactNode
    text: string
}) => {
    return (
        <StyledTooltip>
            <div className="TooltipTrigger">
                { children }
            </div>
            <div className="TooltipContent">
                { text }
            </div>
        </StyledTooltip>
    )
}