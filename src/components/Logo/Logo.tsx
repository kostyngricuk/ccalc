import { Link } from 'react-router-dom';

import Icon from '../UI/Icon/Icon';
import { LogoSVG } from '../../assets/icons';

import './Logo.scss';

export default function Logo() {
  return (
    <Link to='/' aria-label='Go home' className='Logo'>
      <Icon Sprite={LogoSVG} width={'180px'} height={'auto'} />
    </Link>
  );
}