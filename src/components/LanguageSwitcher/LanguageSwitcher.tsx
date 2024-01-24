import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "../../services/constants/global";
import { StyledLanguageSwitcher } from "./StyledLanguageSwitcher";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => () => {
    i18n.changeLanguage(lang);
  }
  return (
    <StyledLanguageSwitcher>
      {LANGUAGES.map((item) => {
        const langCode = item.code;
        const langLabel = item.label;
        return (
          <button className={classNames(
            langCode === i18n.language && 'is-active'
          )} key={langCode} aria-label={langLabel} onClick={handleChangeLanguage(langCode)}>
            {langCode.toUpperCase()}
          </button>
        );
      })}
    </StyledLanguageSwitcher>
  );
};
