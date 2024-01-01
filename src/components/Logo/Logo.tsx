import { Link } from 'react-router-dom';

import { LogoSVG } from '../../assets/icons';

export default function Logo() {
  return (
    <Link to='/' aria-label='Go home' className='logo'>
        <img src={LogoSVG} alt="Logo" />
    </Link>
  );
}