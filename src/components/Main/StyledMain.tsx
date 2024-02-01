import styled from 'styled-components';
import { scrollbar } from '../../services/styled/mixins';

const StyledMain = styled.main`
  height: calc(100vh - 85px - 60px);
  ${scrollbar({})}
  overflow: hidden;
`;
export default StyledMain;
