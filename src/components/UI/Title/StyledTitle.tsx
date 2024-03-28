import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { EnumHorizontalPosition, EnumTitleVariant } from '../../../services/types/global';

function TitleTag({
  children,
  className = '',
  variant,
}: {
  children: ReactNode;
  className?: string;
  variant: EnumTitleVariant;
}) {
  const TagElement = `${variant}` as keyof JSX.IntrinsicElements;
  return (
    <TagElement className={className}>
      {children}
    </TagElement>
  );
}
TitleTag.defaultProps = {
  className: '',
};

const getFontSize = (variant: EnumTitleVariant) => {
  switch (variant) {
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
    default:
      return '44px';
  }
};

const getFontSizeMobile = (variant: EnumTitleVariant) => {
  switch (variant) {
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
    default:
      return '38px';
  }
};

const StyledTitle = styled(TitleTag)<{
  variant: EnumTitleVariant,
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
