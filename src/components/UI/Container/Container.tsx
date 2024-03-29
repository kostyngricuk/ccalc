import { ReactNode } from 'react';
import { StyledContainer } from './StyledContainer';

export default function Container({
    className = '',
    children
}: {
    className?: string,
    children: ReactNode
}) {
    return (
        <StyledContainer className={className}>
            { children }
        </StyledContainer>
    );
  }