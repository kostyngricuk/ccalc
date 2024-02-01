import { css } from 'styled-components';

export const resetButton = css`
  background-color: transparent;
  color: inherit;
  border: none;
  user-select: none;
  outline: none;
  padding: 0;
  margin: 0;
`;

export const scrollbar = (
  {
    thumbBackgroundColor = 'hsl(0deg 0% 0% / 15%)',
    thumbBackgroundColorHover = 'hsl(0deg 0% 0% / 25%)',
    trackBackgroundColor = 'hsl(0deg 0% 0% / 5%)',
    size = '0.25rem',
    borderRadius = '0',
  }: {
    thumbBackgroundColor?: string,
    thumbBackgroundColorHover?: string,
    trackBackgroundColor?: string,
    size?: string,
    borderRadius?: string,
  },
) => `
  &::-webkit-scrollbar {
    block-size: ${size};
    inline-size: ${size};
  }

  &::-webkit-scrollbar-thumb {
    background: ${thumbBackgroundColor};
    border-radius: ${borderRadius};

    &:hover {
    background: ${thumbBackgroundColorHover};
    }
  }

  &::-webkit-scrollbar-track {
    background: ${trackBackgroundColor};
    border-radius: ${borderRadius};
  }
`;
