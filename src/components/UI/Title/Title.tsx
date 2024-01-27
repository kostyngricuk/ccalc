import { ReactNode } from "react";
import { StyledTitle } from "./StyledTitle";

export interface ITitle {
    children?: ReactNode;
    className?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    position?: "left" | "center" | "right"
}

export const Title = ({
    children,
    className = "",
    variant = 'h1',
    position = 'left'
}: ITitle) => {
    return (
        <StyledTitle className={className} variant={variant} position={position}>
            {children}
        </StyledTitle>
    )
}