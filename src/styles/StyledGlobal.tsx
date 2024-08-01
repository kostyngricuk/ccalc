import { createGlobalStyle, css } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  :root {
    ${(props) => Object.keys(props.theme.color).map((colorName) => css`--color-${colorName}: ${(props).theme.color[colorName]};`)}
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p, ul, ol {
    padding: 0;
    margin: 0;
    line-height: 1.43em;
  }

  body {
    font-family: 'Exo', sans-serif;
    font-size: 16px;
  }

  .h1 {
      font-size: 40px;
  }
  .h2 {
      font-size: 32px;
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: 700;
    &:hover {
      color: var(--color-black);
    }
  }
`;
export default StyledGlobal;
