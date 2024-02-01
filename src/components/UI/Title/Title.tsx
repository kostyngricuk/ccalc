import { ReactNode } from "react";
import { StyledTitle } from "./StyledTitle";
import { EnumHorizontalPosition, EnumTitleVariant } from "../../../types/global";

export interface ITitle {
  children?: ReactNode;
  className?: string;
  variant?: EnumTitleVariant;
  position?: EnumHorizontalPosition;
}

export const Title = ({
  children,
  className = "",
  variant = EnumTitleVariant.h1,
  position = EnumHorizontalPosition.left,
}: ITitle) => {
  return (
    <StyledTitle className={className} variant={variant} position={position}>
      {children}
    </StyledTitle>
  );
};
