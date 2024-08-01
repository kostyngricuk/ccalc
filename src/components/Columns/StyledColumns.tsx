import styled from 'styled-components';

const StyledColumns = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: space-between;
  margin: 0;
  height: 100%;
  overflow: hidden;
  & > * {
    flex-basis: 50%;
    padding: 60px 30px 30px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
export default StyledColumns;
