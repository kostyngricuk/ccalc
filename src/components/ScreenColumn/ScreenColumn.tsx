import { ReactNode } from "react";

import './ScreenColumn.scss';

type ScreenColumnProps = {
    children: ReactNode,
    hasBackground?: boolean
};

export default function ScreenColumn({
    children,
    hasBackground = false,
}:ScreenColumnProps) {
    return (
        <div className={[
                "screen-collumn",
                hasBackground ? "screen-collumn_bg" : ''
            ].join(' ')}>
            {children}
        </div>
    )
}