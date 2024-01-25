import Icon from '../UI/Icon/Icon';
import { LogoSVG } from '../../icons';
import { StyledLogo } from './StyledLogo';

import { paths } from '../../services/router/paths';

export default function Logo() {
  return (
    <StyledLogo to={paths.home.url} aria-label='Go home' className='Logo'>
      <Icon Sprite={LogoSVG} width={'180px'} height={'auto'} />
    </StyledLogo>
  );
}