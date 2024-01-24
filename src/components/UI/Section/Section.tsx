import { ReactNode } from 'react';

import { StyledSection } from './StyledSection';

export default function Section({
    children
}: {
    children: ReactNode
}) {
    return (
        <StyledSection>
            { children }
        </StyledSection>
    );
  }