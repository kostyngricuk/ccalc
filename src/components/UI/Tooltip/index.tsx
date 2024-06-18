import React, { ReactNode } from 'react';
import StyledTooltip from './StyledTooltip';

export default function Tooltip({
  children,
  text,
}: {
  children: ReactNode
  text: string
}) {
  return (
    <StyledTooltip>
      <div className="TooltipTrigger">
        { children }
      </div>
      <div className="TooltipContent">
        { text }
      </div>
    </StyledTooltip>
  );
}
