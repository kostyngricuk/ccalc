import { ReactNode } from "react";

type ScreenProps = {
    children: ReactNode,
};

export default function Screen({
    children,
}:ScreenProps) {
    return (
        <div className="container is-flex is-height_full">
            {children}
        </div>
    )
}