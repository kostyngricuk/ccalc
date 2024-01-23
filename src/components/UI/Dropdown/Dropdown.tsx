import { ReactNode, useEffect, useRef, useState } from "react"
import classNames from "classnames"

import Icon from '../Icon/Icon';
import { ArrowUpSVG, ArrowDownSVG } from "../../../assets/icons";

import './Dropdown.scss'
import { useLocation } from "react-router-dom";

type DropdownProps = {
    className: string,
    position?: string,
    children: ReactNode
}

export const Dropdown = ({
    className,
    position = "",
    children
}: DropdownProps) => {
    return (
        <div className={classNames([
            "Dropdown",
            className,
            Boolean(position) && `Dropdown_${position}`
        ])}>
            <div className="Dropdown__wrapper">
                { children }
            </div>
        </div>
    );
}

export const DropdownTrigger = ({
    children,
    showArrow = true
}: {
    children: ReactNode,
    showArrow?: boolean
}) => {
    let location = useLocation();

    const [isActive, setIsActive] = useState(false);
    const refTrigger = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsActive(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside:EventListener = (event) => {
            const triggerEl = refTrigger?.current;
            if (!triggerEl || triggerEl.contains((event?.target as Node) || null)) {
                return;
            }
            setIsActive(false);
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, [])

    return (
        <div ref={refTrigger} className={classNames(
            'DropdownTrigger',
            isActive && `is-active`
        )} onClick={() => setIsActive(!isActive)}>
            { children }
            {
                showArrow && isActive && (
                    <Icon Sprite={ArrowUpSVG} />
                )
            }
            {
                showArrow && !isActive && (
                    <Icon Sprite={ArrowDownSVG} />
                )
            }
        </div>
    )
}

export const DropdownContent = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div className="DropdownContent">
            { children }
        </div>
    )
}