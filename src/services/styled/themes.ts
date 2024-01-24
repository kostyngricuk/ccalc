enum colorsLight {
    white = '#fff',
    black = '#000',
    primary = '#57b945',
    secondary = '#FFCF00',
    gray = 'rgba(0, 0, 0, 0.25)',
    red = '#C00',
    error = 'rgb(231, 24, 24)',
}

enum sizes {
    mobile = '576px',
    tablet = '768px',
    laptop = '1024px',
    desktop = '1280px',
}

export const lightTheme = {
    color: colorsLight,
    device: {
        mobileS: `(width < ${sizes.mobile})`,
        mobile: `(width < ${sizes.tablet})`,
        tablet: `(width < ${sizes.laptop})`,
        laptop: `(width < ${sizes.desktop})`,
    }
}