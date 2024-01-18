import { ReactNode } from 'react';

import './Section.scss';

type SectionProps = {
    children: ReactNode
}

export default function Section({
    children
}: SectionProps) {
    return (
        <section className="Section">
            { children }
        </section>
    );
  }