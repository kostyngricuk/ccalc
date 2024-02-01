import styled from "styled-components";
import { EnumHorizontalPosition, EnumTitleVariant } from "../../../types/global";
import { ITitle } from "./Title";

const Tag = ({
    children,
    className,
    variant
}: ITitle) => {
    const TagElement = `${variant}` as keyof JSX.IntrinsicElements;
    return (
        <TagElement className={className}>
            {children}
        </TagElement>
    )
}

const getFontSize = (variant: EnumTitleVariant) => {
    switch (variant) {
        case EnumTitleVariant.h1:
            return '44px';
        case EnumTitleVariant.h2:
            return '36px';
        case EnumTitleVariant.h3:
            return '32px';
        case EnumTitleVariant.h4:
            return '28px';
        case EnumTitleVariant.h5:
            return '24px';
        case EnumTitleVariant.h6:
            return '20px';
    }
}
const getFontSizeMobile = (variant: EnumTitleVariant) => {
    switch (variant) {
        case EnumTitleVariant.h1:
            return '38px';
        case EnumTitleVariant.h2:
            return '34px';
        case EnumTitleVariant.h3:
            return '30px';
        case EnumTitleVariant.h4:
            return '26px';
        case EnumTitleVariant.h5:
            return '22px';
        case EnumTitleVariant.h6:
            return '18px';
    }
}

export const StyledTitle = styled(Tag)<{variant: EnumTitleVariant, position: EnumHorizontalPosition}>`
    font-size: ${props => getFontSize(props.variant)};
    text-align: ${props => props.position};
    margin-bottom: 1.25em;
    @media ${props => props.theme.device.mobile} {
        font-size: ${props => getFontSizeMobile(props.variant)};
    }
`