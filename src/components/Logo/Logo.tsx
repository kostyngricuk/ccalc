import Icon from '../UI/Icon/Icon';
import { LogoSVG } from '../../icons';
import { StyledLogo } from './StyledLogo';

export default function Logo() {
  return (
    <StyledLogo to='/' aria-label='Go home' className='Logo'>
      <Icon Sprite={LogoSVG} width={'180px'} height={'auto'} />
    </StyledLogo>
  );
}