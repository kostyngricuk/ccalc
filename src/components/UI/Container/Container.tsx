import { ReactNode } from 'react';

import './Container.scss';

type ContainerProps = {
    className?: string,
    children: ReactNode
}

export default function Container({
    className = '',
    children
}: ContainerProps) {
    return (
        <div className={`Container ${className}`}>
            { children }
        </div>
    );
  }