import Icon from '../UI/Icon/Icon';
import { LogoSVG } from '../../icons';
import { StyledLogo } from './StyledLogo';

import { paths } from '../../services/router/paths';
import { useTranslation } from 'react-i18next';

export default function Logo() {
  const { t } = useTranslation();
  return (
    <StyledLogo to={paths.home.url} aria-label={t('areas.goHome')} className='Logo'>
      <Icon Sprite={LogoSVG} width={'180px'} height={'auto'} />
    </StyledLogo>
  );
}