import classNames from "classnames"
import { MouseEventHandler, ReactNode } from "react"

import './Button.scss';

type ButtonProps = {
    children: ReactNode,
    type?: 'button' | 'submit',
    className?: string,
    isIcon?: boolean,
    isOutLine?: boolean,
    color?: 'primary' | 'secondry' | 'red' | 'black',
    ariaLabel?: string,
    isDisabled?: boolean,
    onClick?: MouseEventHandler
}

export const Button = ({
    children,
    type = 'button',
    className = '',
    isIcon = false,
    isOutLine = false,
    color = 'primary',
    ariaLabel = '',
    isDisabled = false,
    onClick
}: ButtonProps) => {
    return (
        <button className={classNames(
            'Button',
            `Button Button_color-${color}`,
            className,
            isIcon && 'is-icon',
            isOutLine && 'is-outline',
            isDisabled && 'is-disabled'
        )} type={type} aria-label={ariaLabel} onClick={onClick}>
            { children }
        </button>
    )
}