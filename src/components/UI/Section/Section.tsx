import { ReactNode } from 'react';

import './Section.scss';

export default function Section({
    children
}: {
    children: ReactNode
}) {
    return (
        <section className="Section">
            { children }
        </section>
    );
  }