enum EnumColorsLight {
  white = '#fff',
  black = '#000',
  primary = '#57b945',
  primaryLight = 'rgba(0, 156, 16, 0.24)',
  secondary = '#FFCF00',
  third = '#C00',
  disabled = 'rgba(0, 0, 0, 0.25)',
  disabledLight = 'rgba(0, 0, 0, 0.1)',
  error = 'rgb(231, 24, 24)',
}

enum EnumSizes {
  mobile = '576px',
  tablet = '768px',
  laptop = '1024px',
  desktop = '1280px',
}

const lightTheme = {
  color: EnumColorsLight,
  device: {
    mobileS: `(width < ${EnumSizes.mobile})`,
    mobile: `(width < ${EnumSizes.tablet})`,
    tablet: `(width < ${EnumSizes.laptop})`,
    laptop: `(width < ${EnumSizes.desktop})`,
  },
};
export default lightTheme;
