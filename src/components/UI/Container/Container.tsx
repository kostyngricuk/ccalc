import { ReactNode } from 'react';

import './Container.scss';

export default function Container({
    className = '',
    children
}: {
    className?: string,
    children: ReactNode
}) {
    return (
        <div className={`Container ${className}`}>
            { children }
        </div>
    );
  }