export enum LANGUAGES {
    en = 'English',
    ru = 'Russian'
}

export const LANGUAGES_CODE_LIST = Object.keys(LANGUAGES) as Array<keyof typeof LANGUAGES>;

export enum UNITS {
    kg = 'kg',
    sm = 'sm'
}