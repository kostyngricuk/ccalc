import { ReactNode } from "react";
import { StyledTitle } from "./StyledTitle";

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface ITitle {
    children?: ReactNode;
    className?: string;
    variant?: Sizes;
}

export const Title = ({
    children,
    className = "",
    variant = 'h1'
}: ITitle) => {
    return (
        <StyledTitle className={className} variant={variant}>
            {children}
        </StyledTitle>
    )
}