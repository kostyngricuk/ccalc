import styled from 'styled-components';

const StyledIcon = styled.span<{
  width: string | undefined;
  height: string | undefined;
}>`
  display: inline-block;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  & svg {
    width: 100%;
    height: 100%;
  }
`;
export default StyledIcon;
