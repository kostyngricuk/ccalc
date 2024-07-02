import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { EnumHorizontalPosition, TypeTitleVariant } from 'types/global';

function TitleTag({
  children,
  className = '',
  variant,
}: {
  children: ReactNode;
  className?: string;
  variant: TypeTitleVariant;
}) {
  const TagElement = `${variant}` as keyof JSX.IntrinsicElements;
  return (
    <TagElement className={className}>
      {children}
    </TagElement>
  );
}

const getFontSize = (variant: TypeTitleVariant) => {
  switch (variant) {
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
    default:
      return '44px';
  }
};

const getFontSizeMobile = (variant: TypeTitleVariant) => {
  switch (variant) {
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
    default:
      return '38px';
  }
};

const StyledTitle = styled(TitleTag)<{
  variant: TypeTitleVariant,
  position: EnumHorizontalPosition
}>`
  font-size: ${(props) => getFontSize(props.variant)};
  text-align: ${(props) => props.position};
  margin-bottom: 0.5em;
  @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => getFontSizeMobile(props.variant)};
  }
`;
export default StyledTitle;
