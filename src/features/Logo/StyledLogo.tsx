import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled(Link)`
  display: inline-block;
  width: 180px;
  @media ${(props) => props.theme.device.mobile} {
      width: 160px;
      & .Icon,
      & svg {
          width: 125px!important;
      }
  }
`;
export default StyledLogo;
