import React from 'react';
import { useTranslation } from 'react-i18next';
import { LogoSVG } from '@icons/index';
import paths from '@services/router/paths';
import Icon from '@components/Icon'
import StyledLogo from './StyledLogo';


export default function Logo() {
  const { t } = useTranslation();
  return (
    <StyledLogo to={paths.home.path} aria-label={t('areas.goHome')} className="Logo">
      <Icon sprite={LogoSVG} width="180px" height="auto" />
    </StyledLogo>
  );
}
