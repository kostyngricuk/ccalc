import { ReactNode } from "react";

import "./Button.scss";

type buttonCollors = "primary" | "red";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  color?: buttonCollors;
  children: ReactNode;
};

const Button = ({
  children,
  onClick,
  color = "primary",
  ...allProps
}: ButtonProps) => {
  return (
    <button
      className={`Button Button_${color}`}
      onClick={onClick}
      {...allProps}
    >
      {children}
    </button>
  );
};

export default Button;
