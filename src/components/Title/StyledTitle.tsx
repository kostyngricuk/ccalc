import styled from 'styled-components';
import { EnumHorizontalPosition, TypeTitleVariant } from 'types/global';

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

const StyledTitle = styled.p<{
  as: TypeTitleVariant,
  position: EnumHorizontalPosition
}>`
  font-size: ${(props) => getFontSize(props.as)};
  text-align: ${(props) => props.position};
  margin-bottom: 0.5em;
  @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => getFontSizeMobile(props.as)};
  }
`;

export default StyledTitle;
