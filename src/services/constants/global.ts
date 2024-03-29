interface ILanguage {
    code: string,
    label: string
}

export const LANGUAGES = [
    {
        code: 'en',
        label: 'English'
    },
    {
        code: 'ru',
        label: 'Russian'
    },
] as ILanguage[];