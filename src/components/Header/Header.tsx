import { NavLink } from 'react-router-dom';

import { LogoSVG } from '../../assets/icons';

import './Header.scss';

export default function Header() {
    return (
        <header className='header'>
            <div className='container header-wrapper'>
                <NavLink to='/' aria-label='Go home' className='header__logo'>
                    <img src={LogoSVG} alt="Logo" />
                </NavLink>
                <nav className="header__menu">
                    <ul>
                        <li><NavLink to={`/`}>Home</NavLink></li>
                        <li><NavLink to={`/about`}>About</NavLink></li>
                        <li><NavLink to={`/contacts`}>Contacts</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}