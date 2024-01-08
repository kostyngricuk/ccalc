import { ReactNode } from "react";
import classNames from "classnames";

import "./Button.scss";

type ButtonProps = {
    children: ReactNode,
    onClick: () => void,
    color?: string
}

interface IColorClasses {
    [key: string]: string
}
const colorClasses = {
    'default': 'Button_primary',
    'red': 'Button_red',
} as IColorClasses;

const Button = ({
    children,
    onClick,
    color = 'default'
}:ButtonProps) => {
    return (
        <button className={classNames('Button', colorClasses[color])} onClick={onClick}>{children}</button>
    )
}

export default Button;