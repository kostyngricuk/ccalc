import styled from "styled-components";
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

const getFontSize = (variant: string) => {
    switch (variant) {
        case 'h1':
            return '44px';
        case 'h2':
            return '36px';
        case 'h3':
            return '32px';
        case 'h4':
            return '28px';
        case 'h5':
            return '24px';
        case 'h6':
            return '20px';
    }
}
const getFontSizeMobile = (variant: string) => {
    switch (variant) {
        case 'h1':
            return '38px';
        case 'h2':
            return '34px';
        case 'h3':
            return '30px';
        case 'h4':
            return '26px';
        case 'h5':
            return '22px';
        case 'h6':
            return '18px';
    }
}

export const StyledTitle = styled(Tag)<{variant: string, position: string}>`
    font-size: ${props => getFontSize(props.variant)};
    text-align: ${props => props.position};
    margin-bottom: 1.25em;
    @media ${props => props.theme.device.mobile} {
        font-size: ${props => getFontSizeMobile(props.variant)};
    }
`