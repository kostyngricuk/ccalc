import styled from 'styled-components';
import { EnumHorizontalPosition } from '@services/types/global';

const StyledTitle = styled.p<{
  position: EnumHorizontalPosition | undefined
}>`
  text-align: ${(props) => props.position};
`;
export default StyledTitle;
