import { ReactNode, useEffect, useRef, useState } from "react"

import Icon from '../Icon/Icon';
import { ArrowUpSVG, ArrowDownSVG } from "../../../icons";

import { useLocation } from "react-router-dom";
import { StyledDropdown, StyledDropdownContent, StyledDropdownTrigger } from "./StyledDropdown";

export const Dropdown = ({
    className = "",
    $position = "",
    children
}: {
    className?: string,
    $position?: string,
    children: ReactNode
}) => {
    return (
        <StyledDropdown $position={$position} className={className}>
            { children }
        </StyledDropdown>
    );
}

export const DropdownTrigger = ({
    children,
    $showArrow = true
}: {
    children: ReactNode,
    $showArrow?: boolean
}) => {
    let location = useLocation();

    const [$isActive, setIsActive] = useState(false);
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

    const handleOnClick = () => {
        setIsActive(!$isActive)
    }

    return (
        <StyledDropdownTrigger $isActive={$isActive} $showArrow={$showArrow} ref={refTrigger} onClick={handleOnClick}>
            { children }
            {
                $showArrow && $isActive && (
                    <Icon Sprite={ArrowUpSVG} />
                )
            }
            {
                $showArrow && !$isActive && (
                    <Icon Sprite={ArrowDownSVG} />
                )
            }
        </StyledDropdownTrigger>
    )
}

export const DropdownContent = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <StyledDropdownContent className="DropdownContent">
            { children }
        </StyledDropdownContent>
    )
}