import { ReactNode } from "react"

import './Dropdown.scss'
import classNames from "classnames"

type DropdownProps = {
    className: string,
    position?: string,
    children: ReactNode
}

export const Dropdown = ({
    className,
    position = "",
    children
}: DropdownProps) => (
    <div className={classNames([
        "Dropdown",
        className,
        Boolean(position) && `Dropdown_${position}`
    ])}>
        <div className="Dropdown__wrapper">
            { children }
        </div>
    </div>
)