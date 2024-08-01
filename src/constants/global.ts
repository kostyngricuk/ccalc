export enum LANGUAGES {
  en = 'English',
  ru = 'Russian',
}

export const LANGUAGES_CODE_LIST = Object.keys(LANGUAGES) as Array<keyof typeof LANGUAGES>;

export enum UNITS {
  kg = 'kg',
  g = 'g',
  ml = 'ml',
  sm = 'sm',
}

export const reqSaveCalcAction = 'product/REQUEST_SAVE_CALC';
