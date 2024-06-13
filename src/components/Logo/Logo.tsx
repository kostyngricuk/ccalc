import React from 'react';
import { useTranslation } from 'react-i18next';
import { LogoSVG } from '@icons/index';
import paths from '@services/router/paths';
import Icon from '@components/UI/Icon/Icon';
import StyledLogo from './StyledLogo';


export default function Logo() {
  const { t } = useTranslation();
  return (
    <StyledLogo to={paths.home.url} aria-label={t('areas.goHome')} className="Logo">
      <Icon Sprite={LogoSVG} width="180px" height="auto" />
    </StyledLogo>
  );
}
