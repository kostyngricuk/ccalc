import styled from 'styled-components';
import { EnumHorizontalPosition } from 'types/global';

const StyledTitle = styled.p<{
  position: EnumHorizontalPosition | undefined
}>`
  text-align: ${(props) => props.position};
`;
export default StyledTitle;
