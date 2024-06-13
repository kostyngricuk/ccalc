import styled from 'styled-components';
import { scrollbar } from '@services/styled/mixins';

const StyledMain = styled.main`
  height: calc(100vh - 60px);
  ${scrollbar({})}
  overflow: auto;
  padding-top: 80px;
`;
export default StyledMain;
